import { Outlet, json, Link, useLoaderData } from "remix";

export default function Admin() {
  return (
    <div className="admin">
      <Link to="contactForm">contactForm </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
