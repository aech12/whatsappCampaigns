import { FormStrategy } from "remix-auth-form";
import type { ActionFunction } from "remix";

import {authenticator} from '~/services/auth.server';

// The rest of the code above here...

authenticator.use(
new FormStrategy(async ({ form, context }) => {
// Here you can use `form` to access and input values from the form.
// and also use `context` to access more things from the server
let username = form.get("username"); // or email... etc
let password = form.get("password");

    // You can validate the inputs however you want
    invariant(typeof username === "string", "username must be a string");
    invariant(username.length > 0, "username must not be empty");

    invariant(typeof password === "string", "password must be a string");
    invariant(password.length > 0, "password must not be empty");

    // And if you have a password you should hash it
    let hashedPassword = await hash(password);

    // And finally, you can find, or create, the user
    let user = await findOrCreateUser(username, hashedPassword);

    // And return the user as the Authenticator expects it
    return user;

})
);
