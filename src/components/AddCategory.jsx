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
        <div className="modal-box w-[494px] h-[266px] flex flex-col ">
          <div className=" flex items-center justify-between border-b bg-[#FFF] h-[68px]">
            <p className="text-[20px] text-[#000]">Add Category</p>
            <form method="dialog">
              <button className="btn  btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>
          <div className="flex items-start ">
            <div className="flex  py-6 flex-col items-start gap-5 bg-[#fff]">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
