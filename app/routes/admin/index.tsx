import { Link } from "remix";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new">Admin page</Link>
    </p>
  );
}
