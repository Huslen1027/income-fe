import Piechart from "./Piechart";
import { DonutData } from "@/pages/utils/DonutData";
export default function Donut() {
  return (
    <div className="flex w-[580px] h-[284px] flex-col items-start rounded-xl bg-[#FFF]">
      <div className="flex w-[580px] h-[284px]  p-4 justify-between items-center border-b">
        <h1 className="text-[16px] text-[#0F172A] ">Income - Expense</h1>
        <p className="text-[16px] text-[#6B7280)]">Jun 1 - Nov 30</p>
      </div>
      <div className="flex py-8 px-6 flex-col items-start ">
        <div className="flex items-start gap-[40px] ">
          <div className="w-[170px] h-[170px]">
            <Piechart />
          </div>
          <div>
            {DonutData.map((e, index) => {
              return (
                <div key={index} className="flex flex-col items-start ">
                  <div className="flex items-center gap-8 mt-3">
                    <div className="flex items-center gap-2 w-[103px]">
                      {e.color}
                      <p className="text-[14px] text-[#0F172A] ">
                        {e.productName}
                      </p>
                    </div>
                    <p className="text-[14px] text-[#0F172A] w-[100px]">
                      {e.expenses}
                    </p>
                    <p className="text-[14px] text-[#0F172A]">{e.percent}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
