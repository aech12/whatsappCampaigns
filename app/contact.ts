import { json } from "remix";
import { db } from "~/utils/db.server";

export type Contact = {
  name: string;
  phone: string;
};

type LoaderData = {
  contactListItems: Array<{ id: string; name: string; phone: string }>;
};

export async function getContacts() {
  const data: LoaderData = {
    contactListItems: await db.contact.findMany({
      take: 5,
      select: { id: true, name: true, phone: true },
      orderBy: { createdAt: "desc" },
    }),
  };
  return json(data);
}
// export async function getPost(slug: Post["slug"]) {
//   const post: Post[] = postsDb.filter((post) => post.slug === slug);
//   return post[0];
// }

export async function createContact(contact: Contact) {
  console.log("c", contact);
  const newContact: Contact = await db.contact.create({ data: contact });
  console.log("c2", newContact);
  return newContact;
}
