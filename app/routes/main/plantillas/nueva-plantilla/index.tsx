import { Form, json, useActionData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { createContact } from "~/contact";

type NewContactError = {
  name?: boolean;
  phone?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name"),
    phone = formData.get("phone");

  const errors: NewContactError = {};
  if (!name) errors.name = true;
  if (!phone) errors.phone = true;
  if (Object.keys(errors).length) {
    return json(errors);
  }
  invariant(typeof name === "string");
  invariant(typeof phone === "string");

  await createContact({ name, phone });
  // redirect("/admin");
  return 10;
};

export default function AdminIndex() {
  const errors = useActionData();

  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Form method="post">
          <p className="text-lg font-bold">Plantillas </p>
          <label className="flex flex-col">
            <p>Nombre: </p>
            <input
              type="text"
              placeholder=""
              name="name"
              className="input p-0 w-full max-w-xs border-gray-400"
            />
            {errors?.name ? <em>Nombre vacio</em> : null}
          </label>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              Tipo
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>SMS</a>
              </li>
              <li>
                <a>Whatsapp</a>
              </li>
            </ul>
          </div>
          <label className="flex">
            <textarea
              className="textarea border-gray-400"
              placeholder="Contenido"
            ></textarea>
          </label>
          <button type="submit" className="btn mt-2 font-bold">
            Crear plantilla
          </button>
        </Form>
      </div>
    </div>
  );
}
