import { useLoaderData, Link, Form, useActionData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";

import { deleteTemplate, getUserTemplates } from "~/services/template.server";
import type { Template } from "~/types/index";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);

  if (_action === "delete") {
    return await deleteTemplate(request, Number(values.id));
  }
  return 11;
};

export default function AdminIndex() {
  const errors = useActionData();
  const templates = useLoaderData<Template[]>();

  return (
    <div>
      {errors}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Contenido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {templates.length
            ? templates.map((template: Template) => (
                <tr key={template.id}>
                  <td>{template.name}</td>
                  <td>{template.type}</td>
                  <td>{template.content}</td>
                  <td>
                    <Link to={`editar-plantilla/${template.id}`}>
                      <button>Editar</button>
                    </Link>
                    <Form method="post">
                      <input type="hidden" name="id" value={template.id} />
                      <button type="submit" name="_action" value="delete">
                        Eliminar
                      </button>
                    </Form>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  return await getUserTemplates(request);
};
