import { Outlet, Link } from "remix";
import Header from "~/components/header";
import Drawer from "~/components/drawer";
import Page from "~/components/page";
import PageBox from "~/components/pageBox";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-200  body-font">
      <Header />
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
