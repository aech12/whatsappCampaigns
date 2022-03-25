import { Link } from "remix";
import { icons } from "./icons";

export default function Component() {
  return (
    <nav className="menu p-4 flex flex-col justify-center items-center overflow-y-auto w-24 bg-base-100 text-base-content my-4 rounded-r-3xl shadow-xl">
      {icons.map((icon) => {
        return (
          <Link key={icon.link} to={icon.link}>
            {icon.jsx}
          </Link>
        );
      })}
    </nav>
  );
}
