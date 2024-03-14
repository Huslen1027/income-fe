import Vector from "./icons/Vector";
import Leading from "./icons/Leading";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" max-w-[1440px] m-auto flex justify-between items-cente  bg-[#fff] px-[120px] py-4 ">
      <div>
        <div className="navbar ">
          <div className="flex-none">
            <Vector />
            <Link href="/dashboard">
              <p className="btn btn-ghost text-base ">Dashboard</p>
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/record">
              <p className="btn btn-ghost text-base">Record</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center items-center">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="h-[32px] flex w-[115px] rounded-3xl  justify-center gap-1 items-center bg-[#0166FF] border-none text-[white]"
        >
          <Leading />
          Record
        </button>

        <div className="navbar w-[10px] mr-[70px]">
          <div className="dropdown dropdown-end w-[30px]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
