import { Outlet, LoaderFunction, ActionFunction } from "remix";
import authenticator from "~/services/auth.server";
import Header from "~/components/header";
import Drawer from "~/components/drawer";
import Page from "~/components/page";
import PageBox from "~/components/pageBox";
import Logout from "~/components/logoutBtn";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-200  body-font">
      <Header />
      <Logout />
      <Page>
        <div className="flex">
          <Drawer />
          <PageBox>
            <Outlet />
          </PageBox>
        </div>
      </Page>
    </div>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  // Log out the user if not auth, this works for any page inside /dashboard Outlet
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export let action: ActionFunction = async ({ request }) => {
  console.log("DASHBOARD");
  return "in dashboard";
};
