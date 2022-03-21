import { ActionFunction } from "remix";
import authenticator from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) => {
  console.log("logout action");
  const r = await authenticator.logout(request, { redirectTo: "/login" });
  console.log("r", r);
  return r;
};

export default function Component() {
  return <p>Logging out</p>;
}
