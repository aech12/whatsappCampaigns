// app/services/session.server.ts
import { createCookieSessionStorage } from "remix";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [`${process.env.AUTH_SECRET}`], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});

export const getSessionUserId = async (request: Request): Promise<number> => {
  const session = await getSession(request.headers.get("cookie"));
  return Number(session.data.user.userId);
};
// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;
