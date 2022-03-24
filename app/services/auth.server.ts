import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
import invariant from "tiny-invariant";
import bcrypt from "bcryptjs";

import { hash, register, login } from "./sign.server";
import type { User } from "~/types";
import { db } from "~/utils/db.server";

let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email"),
      password = form.get("password"),
      page = form.get("page");

    // Validation
    invariant(typeof email === "string", "username must be a string");
    invariant(email.length > 0, "username must not be empty");
    invariant(typeof password === "string", "password must be a string");
    invariant(password.length > 0, "password must not be empty");

    let user = null;

    switch (page) {
      case "login": {
        user = await login(email, password);
        return user;
      }
      case "register": {
        user = await register(email, password);
        return user;
      }
      default: {
        throw new AuthorizationError("Wrong format, auth.server");
      }
    }
  }),
  "user-pass"
);

export default authenticator;
