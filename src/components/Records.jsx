import Leading from "./icons/Leading";
import { Category } from "@/pages/utils/category";
import BluePlus from "./icons/BLueplus";
import { EndRecord } from "@/pages/utils/endRecord";
import AddCategory from "./AddCategory";
export default function Records() {
  return (
    <div className="w-[1440px] h-[1208px] bg-[#F3F4F6] px-[120px] flex items-start gap-6 ">
      <div className=" w-[250px] h-[1032px] inline-flex py-6 px-4 flex-col items-start gap-6 rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] mt-5">
        <div className="flex flex-col items-start gap-6  ">
          <h1 className="text-[24px] text-[#000]">Records</h1>
          <button
            className=" flex justify-center items-center h-[32px] w-[200px] rounded-3xl gap-1 bg-[#0166FF] border-none text-[white]"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <Leading />
            Add
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
            <button className="flex h-[32px]  justify-center items-center gap-1 rounded-[20px] opacity-20">
              Clear
            </button>
          </div>
          <div className="flex flex-col gap-4 h-[472px] w-[210px]">
            {Category.map((e, index) => {
              return (
                <div key={index} className="flex justify-between items-center">
                  <button className="flex gap-2 text-[15px] text-[#1F2937] items-center">
                    {e.icon} {e.name}
                  </button>
                  {e.Leadingicon}
                </div>
              );
            })}
            <div className="flex justify-between items-center z-0 ">
              <AddCategory />
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
                  className="range "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[900px] flex-col items-start gap-6">
        <div className="inline-flex items-center gap-4 mt-10 ">
          <button className="flex w-[32px] h-[32px] justify-center gap-1 items-center rounded-[8px] bg-[#E5E7EB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7906 5.23017C13.0777 5.52875 13.0684 6.00353 12.7698 6.29063L8.83208 10L12.7698 13.7094C13.0684 13.9965 13.0777 14.4713 12.7906 14.7698C12.5035 15.0684 12.0287 15.0777 11.7302 14.7906L7.23017 10.5406C7.08311 10.3992 7 10.204 7 10C7 9.79599 7.08311 9.60078 7.23017 9.45938L11.7302 5.20938C12.0287 4.92228 12.5035 4.93159 12.7906 5.23017Z"
                fill="#0F172A"
              />
            </svg>
          </button>
          <p className="text-[16px] text-[#000]">Last 30 Days</p>
          <button className="flex w-[32px] h-[32px] justify-center gap-1 items-center rounded-[8px] bg-[#E5E7EB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z"
                fill="#0F172A"
              />
            </svg>
          </button>
        </div>
        <div className="flex px-6 py-3 justify-between items-center rounded-[12px] border border-[#E5E7EB] bg-[#FFF] w-[894px] h-[48px]">
          <div className="flex items-center gap-4">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" default className="checkbox " />
              </label>
            </div>
            <p className="text-[16px] text-[#000]">Select all</p>
          </div>
          <div className="flex items-center gap-2">
            <p>-</p>
            <p>35,500</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 ">
          <p className="text-[16px] text-[#000]">Today</p>
          {EndRecord.map((e, index) => {
            return (
              <div key={index} className="flex flex-col items-start ">
                <div className="flex p-5 justify-between items-center border-b w-[894px] h-[64px] rounded-[12px] bg-[#FFF]">
                  <div className="flex items-center gap-4">
                    <button>{e.Foodicon}</button>
                    <div className="w-[35px] h-[35px] rounded-full  bg-[#FF4545] flex justify-center items-center">
                      {e.icon}
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-[16px] text-[#000]">{e.h1}</p>
                      <p className="text-[12px] text-[#6B7280]">{e.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#84CC16] text-[16px]">{e.has}</p>
                    <p className="text-[#84CC16] text-[16px]">{e.num}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-[16px] text-[#000]">Yesterday</p>
          {EndRecord.map((e, index) => {
            return (
              <div key={index} className="flex flex-col items-start ">
                <div className="flex p-5 justify-between items-center border-b w-[894px] h-[64px] rounded-[12px] bg-[#FFF]">
                  <div className="flex items-center gap-4">
                    <button>{e.Foodicon}</button>
                    <div className="w-[40px] h-[40px] rounded-full  bg-[#FF4545] flex justify-center items-center">
                      {e.icon}
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-[16px] text-[#000]">{e.h1}</p>
                      <p className="text-[12px] text-[#6B7280]">{e.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#84CC16] text-[16px]">{e.has}</p>
                    <p className="text-[#84CC16] text-[16px]">{e.num}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
