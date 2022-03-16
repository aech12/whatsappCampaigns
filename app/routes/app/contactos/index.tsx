import { Form, json, useActionData, useLoaderData } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import ContactForm from "./contactForm";
import { createContact, getContacts } from "~/contact";
import type { Contact } from "~/contact";

type NewContactError = {
  name?: boolean;
  phone?: boolean;
};

export const loader = async () => {
  return json(await getContacts());
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

  return (
    <>
      {/* <ContactForm /> */}
      <div>
        {contacts.map((contact) => (
          <p key={contact.phone}>{contact.name}</p>
        ))}
      </div>
      <Form method="post">
        <p>
          <label>
            Nombre: <input type="text" name="name" />
            {errors?.name ? <em>Nombre vacio</em> : null}
          </label>
        </p>
        <p>
          <label>
            Numero de telefono: <input type="text" name="phone" />
            {errors?.phone ? <em>Numero vacio</em> : null}
          </label>
        </p>
        <p>
          <button type="submit">Crear contacto</button>
        </p>
      </Form>
    </>
  );
}
