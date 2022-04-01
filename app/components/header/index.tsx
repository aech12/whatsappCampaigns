import { Link } from "remix";

export default function Header() {
  return (
    <div className="navbar bg-slate-600 text-white px-5">
      <div className="flex-1">
        <Link to="/dashboard">
          <button className="btn btn-ghost normal-case text-xl">Optimus</button>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <Link to="/dashboard/aboutme">Empresa</Link>
        <Link to="/logout">Sign out</Link>
      </div>
    </div>
  );
}
