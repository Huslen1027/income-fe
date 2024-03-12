import { useRouter } from "next/router";
import Vector from "./icons/Vector";
import Leading from "./icons/Leading";
import Link from "next/link";
import { ExpenseModal } from "./ExpenseModal";

export default function Header() {
  const router = useRouter();
  return (
    <div className=" max-w-[1440px] h-[80px] m-auto flex justify-between items-center  bg-[#fff] px-[120px] py-4 ">
      <div>
        <div class="navbar ">
          <div class="flex-none">
            <Vector />
            <Link href="/dashboard">
              <p class="btn btn-ghost text-base ">Dashboard</p>
            </Link>
          </div>
          <div class="flex-1">
            <Link href="/record">
              <p class="btn btn-ghost text-base ">Record</p>
            </Link>
          </div>
        </div>
      </div>

      <div class="flex gap-5 justify-center items-center">
        <button
          className="h-[32px] flex w-[115px]   rounded-3xl  justify-center gap-1 items-center bg-[#0166FF] border-none text-[white]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <Leading />
          Record
        </button>
        <dialog id="my_modal_2" className="modal  relative z-0">
          <ExpenseModal />
          <form
            method="dialog"
            className="modal-backdrop absolute z-10  w-[20px] h-[20px] top-[160px] right-[750px]  "
          >
            <button className="">close</button>
          </form>
        </dialog>
        <div className="navbar w-[10px]">
          {" "}
          <div className="dropdown dropdown-end w-[30px]">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
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
