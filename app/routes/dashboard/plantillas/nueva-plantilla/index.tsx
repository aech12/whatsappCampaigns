import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import * as yup from "yup";
import { validationError, ValidatedForm } from "remix-validated-form";
import { withYup } from "@remix-validated-form/with-yup";

import MyInput from "~/components/form/input";
import MySubmitBtn from "~/components/form/submitBtn";
import { createTemplate } from "~/services/template.server";

// Using yup in this example, but you can use anything
const validator = withYup(
  yup.object({
    name: yup.string().required(),
    type: yup.string().required(),
    content: yup.string().required(),
  })
);

export const action: ActionFunction = async ({ request }) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const { name, type, content } = fieldValues.data;
  // adding next line for typescript, type is guaranteed to be either sms|whatsapp by validator
  if (type !== "sms" && type !== "whatsapp") return "type incorrect";

  const res = await createTemplate(request, { name, type, content });
  return 10;
  // return redirect("/dashboard/plantillas");
};

export const loader: LoaderFunction = () => {
  return {
    defaultValues: {
      type: "sms",
      name: "sms",
      content: "sms",
    },
  };
};

export default function MyForm() {
  const { defaultValues } = useLoaderData();
  return (
    <ValidatedForm
      validator={validator}
      method="post"
      defaultValues={defaultValues}
    >
      <MyInput name="name" label="First Name" />
      <MyInput name="type" label="sms" type="radio" />
      <MyInput name="type" label="whatsapp" type="radio" />
      <MyInput name="content" label="Last Name" />
      <MySubmitBtn />
    </ValidatedForm>
  );
}
