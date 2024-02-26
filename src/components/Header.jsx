import { useRouter } from "next/router";
import Vector from "./icons/Vector";
import Leading from "./icons/Leading";
export default function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center  bg-[#fff] px-[120px] py-4">
      <div>
        <div class="navbar ">
          <div class="flex-none">
            <Vector />
            <p class="btn btn-ghost text-base ">Dashboard</p>
          </div>
          <div class="flex-1">
            <p class="btn btn-ghost text-base">Record</p>
          </div>
        </div>
      </div>

      <div class="avatar flex gap-5">
        <button className="btn flex w-[115px] rounded-3xl  justify-center gap-1 items-center bg-[#0166FF] border-none text-[white]">
          <Leading />
          Record
        </button>

        <div class="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
  );
}
