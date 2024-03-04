import { AddCategory } from "@/pages/utils/addCategory";
import Closeicon from "./icons/Closeicon";
import { useState } from "react";
export function ExpenseModal() {
  const [SwitchColor, setSwichColor] = useState("blue");
  const ExitButton = () => {
    return <div></div>;
  };
  return (
    <div className="w-[792px] h-content mx-auto relative bottom-[150px]">
      <div className="w-[792px] h-[68px] px-6 py-5 bg-white border-b border-slate-200 justify-between items-center inline-flex rounded-[20px_20px_0_0]">
        <div className="text-slate-900 text-xl font-semibold font-sans leading-7 flex items-center justify-between relative">
          <p>Add Category</p>

          <button className=" absolute left-[720px]">
            <Closeicon />
          </button>
        </div>
      </div>
      <div className="w-[396px] h-[500px] px-6 pt-5 bg-white flex-col justify-start items-start gap-5 inline-flex rounded-[0_0_0_20px]">
        <div className="self-stretch bg-gray-100 rounded-[100px] justify-start items-start gap-1 inline-flex w-[350px] h-[40px]">
          <div className="grow shrink basis-0  px-3 rounded-[20px] justify-center items-center gap-1 flex w-[175px] h-[40px]">
            <div className=" text-base font-normal font-sans leading-normal">
              <button
                className={`rounded-3xl w-[175px] h-[40px] ${
                  SwitchColor == "blue"
                    ? "bg-[#0166FF] text-[#F9FAFB] "
                    : "bg-[#F3F4F6]  text-[#1F2937]"
                }`}
                onClick={() => {
                  setSwichColor("blue");
                }}
              >
                Expense
              </button>
            </div>
          </div>
          <div className="grow shrink basis-0  px-3 bg-gray-100 rounded-[20px] justify-center items-center gap-1 flex w-[175px] h-[40px]">
            <div className="text-gray-800 text-base font-normal font-sans leading-normal w-[175px] h-[40px]">
              <button
                className={`rounded-3xl w-[175px] h-[40px] ${
                  SwitchColor == "green"
                    ? "bg-[#16A34A] text-[#F9FAFB]"
                    : "bg-[#F3F4F6] text-[#1F2937]"
                }`}
                onClick={() => {
                  setSwichColor("green");
                }}
              >
                Income
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[340px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch h-[300px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[76px] px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex">
              <div className="text-neutral-900 text-base font-normal font-sans leading-normal">
                Amount
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <input
                  type="text"
                  className="bg-gray-100 outline-none text-gray-400 text-xl font-normal font-sans leading-7"
                  placeholder="₮ 000.00"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg flex-col justify-center items-start flex gap-2">
              <div className="h-[18px] justify-start items-center inline-flex">
                <div className="text-gray-800 text-base font-normal font-sans leading-normal  ">
                  Category
                </div>
              </div>

              <div className="dropdown dropdown-hover   h-12   ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 w-[348px] flex items-start flex-col  font-normal opacity-[0.5] "
                >
                  Find or choose category
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 bg-base-100 w-[358px] flex rounded-[10px]"
                >
                  {AddCategory.map((e) => {
                    return (
                      <div>
                        <li>
                          <a className="">
                            {e.hello} {e.icon} {e.text}
                          </a>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="self-stretch justify-start items-start gap-3 inline-flex">
              <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex gap-2">
                <div className="h-[18px] justify-start items-center inline-flex">
                  <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                    Date
                  </div>
                </div>
                <select className="select  w-full max-w-xs bg-[#F9FAFB] border border-gray-300">
                  <option disabled selected>
                    Oct 30, 2023
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-start inline-flex gap-2">
                <div className="h-[18px] justify-start items-center inline-flex">
                  <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                    Date
                  </div>
                </div>
                <select className="select  w-full max-w-xs bg-[#F9FAFB] border border-gray-300">
                  <option disabled selected>
                    4:15 PM
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => {
                setSwichColor("blue");
              }}
              className={`w-[350px] h-[40px] px-3  rounded-[20px] justify-center items-center gap-1 inline-flex  ${
                SwitchColor == "blue"
                  ? "bg-[#0166FF] text-[#FFFFFF]"
                  : "bg-[#16A34A] text-[#F9FAFB]"
              }`}
            >
              Add Record
            </button>
          </div>
        </div>
      </div>
      <div className="w-[396px] h-[500px] px-6 pt-11 pb-3 bg-white flex-col justify-start items-start gap-5 inline-flex rounded-[0_0_20px_0]">
        <div className="self-stretch h-[376px] flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch h-12 rounded-lg flex-col justify-center items-start flex gap-2">
            <div className="h-[18px] justify-start items-center inline-flex">
              <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                Payee
              </div>
            </div>
            <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-sans leading-normal">
                <input
                  type="text"
                  className="bg-gray-50 outline-none"
                  placeholder="Write here"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[280px] rounded-lg flex-col justify-center items-start flex gap-2">
            <div className="h-[18px] justify-start items-center inline-flex">
              <div className="text-gray-800 text-base font-normal font-sans leading-normal">
                Note
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-sans leading-normal">
                <textarea
                  name=""
                  id=""
                  rows="10"
                  className="bg-gray-100 outline-none"
                  placeholder="Write here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
