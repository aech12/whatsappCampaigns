import { json } from "remix";
import { db } from "~/utils/db.server";

export type Contact = {
  name: string;
  phone: string;
};

type LoaderData = Array<{ id: string; name: string; phone: string }>;

export async function getContacts() {
  const data: LoaderData = await db.contact.findMany({
    take: 5,
    select: { id: true, name: true, phone: true },
    orderBy: { createdAt: "desc" },
  });
  // console.log("d", data);
  return json(data);
}
// export async function getPost(slug: Post["slug"]) {
//   const post: Post[] = postsDb.filter((post) => post.slug === slug);
//   return post[0];
// }

export async function createContact(contact: Contact) {
  const newContact: Contact = await db.contact.create({ data: contact });
  // console.log("createContact", newContact);
  return newContact;
}
