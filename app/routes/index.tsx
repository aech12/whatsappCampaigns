import { Link } from "remix";
export default function Index() {
  return (
    <div className="p-5">
      <p className="font-bold underline">Whatsapp Campaigns App</p>
      <p className="p-5 my-5 bg-red-400 text-white text-lg">
        This app is unfinished. The client did not contact me anymore.
      </p>
      <p>
        Login and backend functionality will continue to work for some time.
      </p>
      <p className="">Contact me at aech-12@hotmail.</p>
      <Link to="/login">
        <button className="px-4 py-2 mt-2 border-black border-2 rounded">
          Login
        </button>
      </Link>
    </div>
  );
}
