import { Form, json, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { sendMsj } from "~/utils/twilio.server";

type ContactError = {
  phone?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  // const formData = await request.formData();

  // const phone = formData.get("phone");

  // const errors: ContactError = {};
  // if (!phone) errors.phone = true;
  // if (Object.keys(errors).length) {
  //   return json(errors);
  // }
  // invariant(typeof phone === "string");

  // const b = await sendMsj(phone);
  console.log("SEND MSJ");
  return 10;
};

export default function AdminIndex() {
  const errors = useActionData();

  return (
    <Form method="post">
      <p className="text-lg font-bold">Enviar mensaje (test)</p>
      <label className="flex flex-col">
        <p>Numero: </p>
        <input
          type="text"
          placeholder=""
          name="phone"
          className="input p-0 w-full max-w-xs border-gray-400"
        />
        {errors?.phone ? <em>Numero vacio</em> : null}
      </label>
      <p>
        <button type="submit" className="btn mt-2">
          Enviar
        </button>
      </p>
    </Form>
  );
}
