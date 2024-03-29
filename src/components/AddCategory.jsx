import BluePlus from "./icons/BLueplus";
import { AddCategory2 } from "@/pages/utils/addCategory2";
import ArrowDropdown from "./icons/addCategoryicon/ArrowDropdown";
import { useState } from "react";
import CategoryIcon1 from "./icons/addCategoryicon/categoryIcon1";
export default function AddCategory() {
  const [icon, seticon] = useState("chose");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleGetIcon = (icon) => {
    seticon(icon);
    setDropdownVisible(false);
  };
  return (
    <div>
      <button
        className="flex h-[32px] py-3 justify-center items-center gap-2 rounded-[8px] "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <BluePlus />
        Add Gategory
      </button>
      <dialog
        id="my_modal_2"
        className="modal flex rounded-[12px] items-center justify-center flex-col"
      >
        <div className="modal-box w-full h-[300px] flex flex-col gap-5 relative">
          <div className=" flex items-center justify-between border-b  bg-[#FFF] h-[48px]">
            <p className="text-[20px] text-[#000]">Add Category</p>
            <form method="dialog">
              <button className="btn  btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>

          <div className="flex flex-col items-start ">
            <div className="flex py-6  gap-5 bg-[#fff] ">
              <div>
                <div className="dropdown dropdown-bottom bg-[#F9FAFB]  rounded-lg border relative">
                  <div
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                    tabIndex={0}
                    role="button"
                    className="btn flex w-[84px] h-[48px] justify-center items-center rounded-lg gap-3 bg-[#F9FAFB]"
                  >
                    <div className="flex items-center ">
                      {icon}
                      <ArrowDropdown />
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className={`dropdown-content  menu p-2  bg-base-100 rounded-box h-[288px] w-[342px] ${
                      dropdownVisible ? "block" : "hidden"
                    }`}
                  >
                    <div className="grid grid-cols-6 gap-4 px-3 py-3 border-b-2 ">
                      {AddCategory2.map((e, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              handleGetIcon(e.icon);
                            }}
                          >
                            <div className="">
                              {" "}
                              <p> {e.icon}</p>
                            </div>
                            <div>{e.color}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <label className="form-control w-[350px] h-[48px] max-w-xs ">
                  <select className="select select-bordered bg-[#F9FAFB]">
                    <option selected>Name</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <button className="text-[white] text-[20px] w-[425px] h-[40px] px-3  rounded-[20px] justify-center items-center gap-1 inline-flex bg-[#16A34A]">
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
}
