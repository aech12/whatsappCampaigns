import type { LoaderFunction } from "remix";
import authenticator from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) =>
  await authenticator.logout(request, { redirectTo: "/login" });

export default function Component() {
  return <p>Logging out</p>;
}
