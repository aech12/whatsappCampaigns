import { Form, json, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { sendMsj } from "~/utils/twilio.server";

type ContactError = {
  phone?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const phone = formData.get("phone");

  const errors: ContactError = {};
  if (!phone) errors.phone = true;
  if (Object.keys(errors).length) {
    return json(errors);
  }
  invariant(typeof phone === "string");

  const b = await sendMsj(phone);
  console.log("b", b);
  return 10;
};

export default function AdminIndex() {
  const errors = useActionData();

  return (
    <Form method="post">
      <p>
        <label>
          Enviar a: <input type="text" name="phone" />
          {errors?.phone ? <em>Numero vacio</em> : null}
        </label>
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </Form>
  );
}
