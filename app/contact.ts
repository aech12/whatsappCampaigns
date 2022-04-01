// import { json } from "remix";
import { db } from "~/utils/db.server";
import { getSessionUserId } from "~/services/session.server";
import type { Contact } from "~/types/index";

type LoaderData = Array<{ id: string; name: string; phone: string }>;

export async function getContacts(request: Request) {
  const userId = await getSessionUserId(request);

  return await db.contact.findMany({
    where: {
      userId,
    },
  });
}
// export async function getPost(slug: Post["slug"]) {
//   const post: Post[] = postsDb.filter((post) => post.slug === slug);
//   return post[0];
// }

export async function createContact(
  request: Request,
  contact: { name: string; phone: string }
) {
  const userId = await getSessionUserId(request);

  const newContact: Contact = await db.contact.create({
    data: { ...contact, userId },
  });
  // console.log("createContact", newContact);
  return newContact;
}
