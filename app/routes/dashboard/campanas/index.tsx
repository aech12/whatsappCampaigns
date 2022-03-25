import { LoaderFunction, useLoaderData, Link } from "remix";
import authenticator from "~/services/auth.server";
import { getUserCampaigns } from "~/services/campaign.server";

import type { Campaign } from "~/types/index";

export default function AdminIndex() {
  const campaign = useLoaderData<Campaign>();
  return (
    <div>
      <p className="text-lg font-bold">Campañas</p>
      <Link to="nueva-campana/1">
        <button className="btn">+ Nueva Campaña</button>
      </Link>
      <p>Nombre Tipo Contenido Acciones</p>
      <p>
        {campaign.name} {campaign.type} {campaign.content}
      </p>
    </div>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  let campaign = await getUserCampaigns("c@mail.com");
  // user.passwordHash = "";
  return campaign;
};
