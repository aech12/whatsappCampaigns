import { useLoaderData, Outlet, Link } from "remix";

import NuevaPlantilla from "./nueva-plantilla";
import { getContacts } from "~/contact";
import type { Contact } from "~/contact";

// export const loader = async () => await getContacts();

export default function AdminIndex() {
  // const contacts = useLoaderData<Contact[]>();

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <p className="text-lg font-bold">Plantillas </p>
        <Link to="nueva-plantilla">
          <button className="btn">+ Nueva plantilla</button>
        </Link>
      </div>
      <div>
        <p className="text-lg font-bold">Lista de plantillas</p>
        {/* {contacts.map((contact) => (
          <p key={contact.phone}>
            {contact.name} {contact.phone}
          </p>
        ))} */}
      </div>
      {/* <main>
        <Outlet />
      </main> */}
    </div>
  );
}
