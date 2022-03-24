import { ActionFunction } from "remix";
import authenticator from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) => {
  const r = await authenticator.logout(request, { redirectTo: "/login" });
  return r;
};

export default function Component() {
  return <p>Logging out</p>;
}
