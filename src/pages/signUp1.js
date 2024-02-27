import Geld from "@/components/icons/Geld";
import Vector from "@/components/icons/Vector";
import Dollar from "@/components/icons/Dollar";
export default function SignUp1() {
  return (
    <div className="flex  py-10 flex-col items-center gap-[141px] bg-[#FFF] h-[1000px] ">
      <div className="flex flex-col items-center gap-10">
        <div className="flex p-[6px] items-center gap-[11px] justify-center">
          <Vector />
          <Geld />
        </div>
        <ul className="steps bg-[white]">
          <li className="step step-primary ">Currency</li>
          <li className="step ">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 w-[384px] h-[308px]">
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex flex-col items-center gap-6">
            <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full flex justify-center items-center">
              <Dollar />
            </div>
            <h1 className="text-[24px] text-[#0F172A]">Select base currency</h1>
            <select className="select select-bordered select-lg w-[384px]  bg-gray-100 border border-black ">
              <option>MNT-Mongolian Tugrik</option>
              <option>Large Apple</option>
              <option>Large Orange</option>
              <option>Large Tomato</option>
            </select>
          </div>
          <p className="text-[12px] text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </p>
        </div>
        <button className="flex w-[384px] h-[48px] gap-1 justify-center items-center rounded-[20px]  bg-[#0166FF]">
          <p className="text-[#FFFFFF] text-[20px]">Confirm</p>
        </button>
      </div>
    </div>
  );
}
