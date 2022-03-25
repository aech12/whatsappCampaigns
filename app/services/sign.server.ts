import bcrypt from "bcryptjs";
import { AuthorizationError } from "remix-auth";

import { db } from "~/utils/db.server";

export const hash = async (password: string) => await bcrypt.hash(password, 10);

export async function login(email: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new AuthorizationError("Bad Credentials");
  const checkPassword = bcrypt.compareSync(password, user.passwordHash);
  if (!checkPassword) throw new AuthorizationError("Bad Credentials");
  return user;
}

export async function register(email: string, password: string) {
  const userExists = await db.user.findFirst({
    where: {
      email,
    },
  });
  if (userExists) throw new AuthorizationError("Email ya existe");

  const passwordHash = await hash(password);
  const user = await db.user.create({
    data: { email, passwordHash },
  });
  return { id: user.id, email };
}
