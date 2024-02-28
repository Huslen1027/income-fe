import Leading from "./icons/Leading";
import { Category } from "@/pages/utils/category";
import BluePlus from "./icons/BLueplus";
export default function Records() {
  return (
    <div className="w-[1440px] h-[1208px] bg-[#F3F4F6] px-[120px]">
      <div className=" w-[250px] h-[1032px] inline-flex py-6 px-4 flex-col items-start gap-6 rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="flex flex-col items-start gap-6  ">
          <h1 className="text-[24px] text-[#000]">Records</h1>
          <button className="flex justify-center items-center h-[32px] w-[200px] rounded-3xl gap-1 bg-[#0166FF] border-none text-[white]">
            <Leading />
            Record
          </button>
        </div>
        <div className="flex w-[200px] flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm w-full max-w-xs border border-[#D1D5DB] bg-[#F3F4F6] text-[#A3A3A3]"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="form-control ">
            <label className="label cursor-pointer gap-4">
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="default"
              />
              <span className="label-text">All</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="retro"
              />
              <span className="label-text">Income</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="cyberpunk"
              />
              <span className="label-text">Expense</span>
            </label>
          </div>
        </div>
        <div className="  h-[520px] flex flex-col items-start gap-4">
          <div className="flex justify-between items-center w-[210px]">
            <h1 className="text-[16px] text-[#1F2937]">Category</h1>
            <button className="flex h-[32px]  justify-center items-center gap-1 rounded-[20px]">
              Clear
            </button>
          </div>
          <div className="flex flex-col items-start gap-4 h-[472px] w-[210px]">
            {Category.map((e) => {
              return (
                <button className="flex gap-2 justify-center text-[15px] text-[#1F2937] items-center">
                  {e.icon} {e.name}
                  <div className="flex justify-end items-end">
                    {" "}
                    {e.Leadingicon}
                  </div>
                </button>
              );
            })}
            <div className="flex justify-between items-center ">
              <button className="flex h-[32px] py-3 justify-center items-center gap-2 rounded-[8px] ">
                <BluePlus />
                <p className="text-[16px] text-[#1F2937]">Add Category</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-[16px] text-[#1F2937]">Amount Range</h1>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4 items-start">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="w-[220px] h-[48px]">
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="40"
                  className="range range-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
