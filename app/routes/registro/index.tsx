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

  const fields = { email, password };

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
  return (
    <div className="container">
      <RegisterForm actionData={actionData} />
    </div>
  );
}
