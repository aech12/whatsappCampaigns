// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
import invariant from "tiny-invariant";

import type { User } from "~/types";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    // Here you can use `form` to access and input values from the form.
    // and also use `context` to access more things from the server
    let email = form.get("email"); // or email... etc
    let password = form.get("password");

    // You can validate the inputs however you want
    invariant(typeof email === "string", "username must be a string");
    invariant(email.length > 0, "username must not be empty");
    invariant(typeof password === "string", "password must be a string");
    invariant(password.length > 0, "password must not be empty");

    let user = { email: "a@mail.com", token: "asofa" };

    // throw new AuthorizationError("Bad Credentials: Email must be a string");

    // // And if you have a password you should hash it
    // let hashedPassword = await hash(password);

    // // And finally, you can find, or create, the user
    // let user = await findOrCreateUser(username, hashedPassword);

    // And return the user as the Authenticator expects it
    return user;
  }),
  "user-pass"
);

export default authenticator;
