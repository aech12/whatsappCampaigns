import { Outlet } from "remix";
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
