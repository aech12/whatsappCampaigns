import { AuthorizationError } from "remix-auth";
import { db } from "~/utils/db.server";

export async function getAccountDetails(email: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new AuthorizationError("Bad Credentials");
  return user;
}
