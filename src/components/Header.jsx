import { useRouter } from "next/router";
import Vector from "./icons/Vector";
import Leading from "./icons/Leading";
import Link from "next/link";
import { ExpenseModal } from "./ExpenseModal";

export default function Header() {
  const router = useRouter();
  return (
    <div className=" max-w-[1420px] m-auto flex justify-between items-center  bg-[#fff] px-[120px] py-4 ">
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
              <p class="btn btn-ghost text-base">Record</p>
            </Link>
          </div>
        </div>
      </div>

      <div class="avatar flex gap-5 justify-center items-center">
        <button
          className="h-[32px] flex w-[115px] rounded-3xl  justify-center gap-1 items-center bg-[#0166FF] border-none text-[white]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <Leading />
          Record
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className=" ">
            <ExpenseModal />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div class="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
}
