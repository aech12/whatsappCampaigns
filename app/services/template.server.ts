import { db } from "~/utils/db.server";
import { getSessionUserId } from "~/services/session.server";
import type { Template } from "~/types";

// GET
export async function getUserTemplates(
  request: Request
): Promise<Template[] | any[]> {
  const userId = await getSessionUserId(request);

  return await db.template.findMany({
    where: { userId },
  });
}

export async function getTemplate(request: Request, templateId: number) {
  const userId = await getSessionUserId(request);

  return await db.template.findMany({
    where: {
      id: templateId,
      userId,
    },
  });
}
// GET END

// POST PUT
export async function createTemplate(request: Request, template: Template) {
  const userId = await getSessionUserId(request);

  const createdTemplate = await db.template.create({
    data: { ...template, userId },
  });
  return createdTemplate;
}

export async function editTemplate(request: Request, template: Template) {
  const userId = await getSessionUserId(request);

  const checkAuthor = await db.template.findFirst({
    where: { id: template.id },
  });

  if (!checkAuthor) throw new Error("Template not found");
  if (checkAuthor.userId !== userId)
    throw new Error("You're not authorized to change someone else's template");

  const editedTemplate = await db.template.update({
    where: { id: template.id },
    data: {
      name: template.name,
      content: template.content,
      type: template.type,
    },
  });
  return editedTemplate;
}
// POST PUT END

// DELETE
export async function deleteTemplate(request: Request, templateId: number) {
  // console.log(templateId);
  // return templateId;
  const userId = await getSessionUserId(request);

  return await db.template.deleteMany({
    where: {
      id: templateId,
      userId,
    },
  });
}
