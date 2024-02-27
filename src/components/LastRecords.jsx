import Home from "@/pages";
export default function LastRecords() {
  return (
    <div className="flex w-[1200px] flex-col items-start rounded-xl bg-[#FFF]">
      <div className="flex items-center w-[1200px] gap-2 p-4 border-b">
        <p className="text-[16px] text-[#0f172a]">Last Records</p>
      </div>
      <div className="flex flex-col items-start ">
        <div className="flex p-5 justify-between items-center border-b bg-[#FFF]">
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] rounded-full text-[blue]">
              <Home />
            </div>
            <div></div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#84CC16] text-[16px]">-</p>
            <p className="text-[#84CC16] text-[16px]">1,000₮</p>
          </div>
        </div>
      </div>
    </div>
  );
}
