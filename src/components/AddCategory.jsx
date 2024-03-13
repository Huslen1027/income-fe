import BluePlus from "./icons/BLueplus";
import { AddCategory2 } from "@/pages/utils/addCategory2";
import HouseIcon from "./icons/addCategoryicon/HouseIcon";
import ArrowDropdown from "./icons/addCategoryicon/ArrowDropdown";
import Houseline from "./icons/addCategoryicon/Houseline";

export default function AddCategory() {
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
        className="modal flex rounded-[12px] items-center justify-center flex-col "
      >
        <div className="modal-box w-[524px] h-[296px] flex flex-col gap-5">
          <div className=" flex items-center justify-between border-b  bg-[#FFF] h-[48px]">
            <p className="text-[20px] text-[#000]">Add Category</p>
            <form method="dialog">
              <button className="btn  btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          {AddCategory2.map((e, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col items-start ">
                  <div className="flex py-6  gap-5 bg-[#fff] ">
                    <div>
                      <div className="dropdown bg-[#F9FAFB] dropdown-bottom rounded-lg border relative">
                        <button
                          tabIndex={0}
                          className="flex w-[84px] h-[48px] justify-center items-center rounded-lg gap-3"
                        >
                          <HouseIcon />
                          <ArrowDropdown />
                        </button>

                        <div
                          tabIndex={0}
                          className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-[312px] h-[288px]"
                        >
                          <a>
                            {" "}
                            <Houseline />
                          </a>

                          <li>
                            <a>Item 2</a>
                          </li>
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
              </div>
            );
          })}

          <button className="text-[white] text-[20px] w-[425px] h-[40px] px-3  rounded-[20px] justify-center items-center gap-1 inline-flex bg-[#16A34A]">
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
}
