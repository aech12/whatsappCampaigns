import { Link } from "remix";

export default function AdminIndex() {
  return (
    <p>
      <Link to="and/m2">Create a New Post</Link>
    </p>
  );
}
