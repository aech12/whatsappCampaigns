import { ActionFunction, json, redirect } from "remix";
import { deleteTemplate } from "~/services/template.server";

// return type of this action
export type DeleteTaskActionData = {
  formError?: string;
  fieldErrors?: {
    taskId?: string;
  };
  fields?: {
    taskId?: string;
  };
  ok?: boolean;
};

const badRequest = (data: DeleteTaskActionData) => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const templateId = form.get("id");
  console.log("templateId", templateId);
  try {
    return 10;
    // const res = await deleteTemplate(request, templateId);
    // return res
    // return redirect('/');
  } catch (e: any) {
    return badRequest({
      formError: e.message,
    });
  }
};
