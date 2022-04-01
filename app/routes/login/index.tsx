import {
  Form,
  ActionFunction,
  LoaderFunction,
  ErrorBoundaryComponent,
  Link,
} from "remix";
import authenticator from "~/services/auth.server";

function Screen(err?: string) {
  return (
    <Form
      className="h-screen flex flex-col justify-center items-center"
      method="post"
    >
      <p className="text-lg font-bold underline ">Login Page</p>
      <input type="hidden" name="page" value="login" />
      <div className="my-5 flex flex-col">
        <input
          className="input "
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          className="input "
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
        />
      </div>
      <div className="flex">
        <Link to="/registro">
          <button className="btn btn-outline mx-1">Register</button>
        </Link>
        <button className="btn mx-1" type="submit">
          Login
        </button>
      </div>
      {err ? <p>{err}</p> : null}
    </Form>
  );
}

export default function ScreenComponent() {
  return Screen();
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return Screen(error.message);
};

export let action: ActionFunction = async ({ request }) => {
  // for error handling https://github.com/sergiodxa/remix-auth
  return await authenticator
    .authenticate("user-pass", request, {
      successRedirect: "/dashboard",
      throwOnError: true,
    })
    .then((e) => e);
};

export let loader: LoaderFunction = async ({ request }) => {
  // If the user is authenticated redirect to /dashboard
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
};
