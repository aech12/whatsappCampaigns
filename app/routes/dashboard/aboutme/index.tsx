import { LoaderFunction, useLoaderData } from "remix";
import authenticator from "~/services/auth.server";
import { getAccountDetails } from "~/services/user.server";

import type { User } from "~/types/index";

export default function AdminIndex() {
  const user = useLoaderData<User>();
  return (
    <div>
      <p className="text-lg font-bold">Empresa {user.name}</p>
      <p>Correo: {user.email}</p>
      <p>Token: {user?.token}</p>
      <p>Contactos: {user.contacts?.length} </p>
      <p>Campañas: {user.campaigns?.length}</p>
      <p>Plantillas: {user.templates?.length}</p>
    </div>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  let user = await getAccountDetails("c@mail.com");
  user.passwordHash = "";
  return user;
};
