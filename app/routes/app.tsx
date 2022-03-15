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

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <Link to="and/m2">Icono</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
