import {
  Form,
  ActionFunction,
  LoaderFunction,
  ErrorBoundaryComponent,
} from "remix";
import authenticator from "~/services/auth.server";

function Screen(err?: string) {
  return (
    <div>
      <Form method="post">
        <input type="hidden" name="page" value="login" />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
        />
        {err ? <p>{err}</p> : null}
        <button>Sign In</button>
      </Form>
    </div>
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
