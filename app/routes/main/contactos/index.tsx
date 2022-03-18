import { Form, json, useActionData, useLoaderData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { createContact, getContacts } from "~/contact";
import type { Contact } from "~/contact";

type NewContactError = {
  name?: boolean;
  phone?: boolean;
};

export const loader = async () => {
  console.log("ASC");
  return await getContacts();
};

export const action: ActionFunction = async ({ request }) => {
  console.log("n");
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
  const contacts = useLoaderData<Contact[]>();
  console.log(contacts);

  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Form method="post">
          <p className="text-lg font-bold">Crear nuevo contacto </p>
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
          <label className="flex flex-col">
            <p>Numero: </p>
            <input
              type="text"
              placeholder=""
              name="´phone"
              className="input p-0 w-full max-w-xs border-gray-400"
            />
            {errors?.phone ? <em>Numero vacio</em> : null}
          </label>
          <button type="submit" className="btn mt-2 font-bold">
            Crear contacto
          </button>
        </Form>
      </div>
      <div>
        <p className="text-lg font-bold">Contactos</p>
        {contacts.map((contact) => (
          <p key={contact.phone}>
            {contact.name} {contact.phone}
          </p>
        ))}
      </div>
    </div>
  );
}
