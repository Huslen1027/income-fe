import { LastRecord } from "@/pages/utils/LastRecords";
export default function LastRecords() {
  return (
    <div className="flex flex-col items-start rounded-xl  bg-[#FFF]">
      <div className="flex items-center  gap-2 p-4 border-b w-[1180px]">
        <p className="text-[16px] text-[#0f172a]">Last Records</p>
      </div>
      {LastRecord.map((e) => {
        return (
          <div className="flex flex-col items-start ">
            <div className="flex p-5 justify-between items-center border-b w-[1180px]  bg-[#FFF]">
              <div className="flex items-center gap-4">
                <div className="w-[40px] h-[40px] rounded-full  bg-[#0166FF] flex justify-center items-center">
                  {e.icon}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[16px] text-[#000]">{e.h1}</p>
                  <p className="text-[12px] text-[#6B7280]">{e.p}</p>
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
  );
}
