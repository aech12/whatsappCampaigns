import { ActionFunction } from "remix";
import authenticator from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) =>
  await authenticator.logout(request, { redirectTo: "/login" });

export default function Component() {
  return <p>Logging out</p>;
}
