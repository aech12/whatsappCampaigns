import bcrypt from "bcryptjs";
import { Authenticator, AuthorizationError } from "remix-auth";
import { createCookieSessionStorage, redirect } from "remix";
import authenticator from "~/services/auth.server";

import { db } from "~/utils/db.server";
import type { RegisterForm } from "~/types/sign";

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
  const passwordHash = await hash(password);
  const user = await db.user.create({
    data: { email, passwordHash },
  });
  return { id: user.id, email };
}

export async function createSession(request: any) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/registro",
    throwOnError: true,
  });
}
