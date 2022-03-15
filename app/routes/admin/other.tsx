import { Outlet, json, Link, redirect } from "remix";

export default function NewPost() {
  return (
    <div>
      <h2>SECONDS</h2>
      <Outlet />
    </div>
  );
}
