import {
  useActionData,
  json,
  useLoaderData,
  LoaderFunction,
  ActionFunction,
  redirect,
} from "remix";

import { db } from "~/utils/db.server";
import { createSession, register } from "~/services/sign.server";

import RegisterForm from "./RegisterForm";

type LoaderData = Array<{ email: string }>;

export const loader: LoaderFunction = async () => {
  const data: LoaderData = await db.user.findMany({
    take: 10,
    select: { email: true },
  });
  console.log("d", data);
  return json(data);
};

function validateUsername(email: unknown) {
  if (typeof email !== "string" || email.length < 3) {
    return `Email must be at least 3 characters long`;
  }
}
function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

export type ActionData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    password: string | undefined;
  };
  fields?: {
    email: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email"),
    password = form.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { email, password };
  const fieldErrors = {
    email: validateUsername(email),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  const userExists = await db.user.findFirst({
    where: { email },
  });
  if (userExists) {
    return badRequest({
      fields,
      formError: `User with email ${email} already exists`,
    });
  }
  const user = await register({ email, password });
  if (!user) {
    return badRequest({
      fields,
      formError: `Something went wrong trying to create a new user.`,
    });
  }
  await createSession(request);
  return redirect("dashboard");
};

export default function Register() {
  const actionData = useActionData<ActionData>();
  const data = useLoaderData<LoaderData>();
  return (
    <div className="container">
      <h1>Data</h1>
      {data.length ??
        data.map((contact) => (
          <p key={contact.email}>Email: {contact.email}</p>
        ))}
      <RegisterForm actionData={actionData} />
    </div>
  );
}
