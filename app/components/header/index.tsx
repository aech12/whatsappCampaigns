// <div classNameName="flex justify-between bg-gray-400">
//   <h1 classNameName="text-xl">Optimus</h1>
//   <h1 classNameName="text-xl">Empresa</h1>
// </div>
export default function Header() {
  return (
    <div className="navbar bg-gray-500 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Optimus</a>
      </div>
      <div className="flex-none gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <p className="">Empresa</p>
      </div>
    </div>
  );
}
