import BluePlus from "./icons/BLueplus";

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
        <div className="modal-box w-[524px] h-[296px] flex flex-col ">
          <div className=" flex items-center justify-between border-b bg-[#FFF] h-[48px]">
            <p className="text-[20px] text-[#000]">Add Category</p>
            <form method="dialog">
              <button className="btn  btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          <div className="flex items-start ">
            <div className="flex py-6 flex-col items-start gap-5 bg-[#fff]">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected></option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div></div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
