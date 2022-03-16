import { Outlet, json, Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = async () => {
  return json(await getPosts());
};

export default function App() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <Link to="/app">App </Link>
      <Link to="contactos">Nuevo contacto</Link>
      <Link to="contactos">Campañas</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
