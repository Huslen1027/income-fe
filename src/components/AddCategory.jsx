import BluePlus from "./icons/BLueplus";
import { AddCategory2 } from "@/pages/utils/addCategory2";
export default function AddCategory() {
  return (
    <div className="">
      <button
        className="flex h-[32px] py-3 justify-center items-center gap-2 rounded-[8px] "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <BluePlus />
        Add Gategory
      </button>
      <dialog
        id="my_modal_3"
        className="modal flex rounded-[12px] items-center justify-center flex-col "
      >
        <div className="modal-box w-[524px] h-[296px] flex flex-col gap-5">
          <div className=" flex items-center justify-between border-b bg-[#FFF] h-[48px]">
            <p className="text-[20px] text-[#000]">Add Category</p>
            <form method="dialog">
              <button className="btn  btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          {AddCategory2.map((e, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col items-start ">
                  <div className="flex py-6  gap-5 bg-[#fff]">
                    <div>
                      <select className="select select-bordered w-[84px] h-[40px] max-w-xs">
                        <option disabled selected></option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </div>

                    <div className="">
                      <label className="form-control w-[350px] h-[48px] max-w-xs">
                        <select className="select select-bordered">
                          <option disabled selected>
                            Name
                          </option>
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
