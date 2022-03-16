import { useActionData, Form } from "remix";
import type { ActionFunction } from "remix";

import { createContact } from "~/contact";

export const action: ActionFunction = async ({ request }) => {
  console.log("IN FUNC");
  const formData = await request.formData();

  const name = formData.get("name"),
    phone = formData.get("phone");
  console.log(name, phone);

  // const errors = {};
  // if (!title) errors.title = true;
  // if (!slug) errors.slug = true;
  // if (!markdown) errors.markdown = true;
  // if (Object.keys(errors).length) {
  //   return json(errors);
  // }

  // await createPost({ title, slug, markdown });

  // return redirect("/admin");
  return 10;
};

export default function ContactForm() {
  const errors = useActionData();
  return (
    <div>
      <h2>Nuevo contacto</h2>{" "}
      <Form method="post">
        <p>
          <label>
            Nombre: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Numero de telefono: <input type="text" name="phone" />
          </label>
        </p>
        <p>
          <button type="submit">Crear contacto</button>
        </p>
      </Form>
    </div>
  );
}
