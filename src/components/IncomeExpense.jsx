import Piechart from "./Piechart";
import BLuedoth from "./icons/blueDoth";
import Pinkdoth from "./icons/Pinkdoth";
import Orangedoth from "./icons/Orangedoth";
import Greendoth from "./icons/Greendoth";
import Clothes from "./icons/Clothes";
export default function IncomeExpense() {
  return (
    <div className="flex w-[640px] h-[284px] flex-col items-start rounded-xl bg-[#FFF]">
      <div className="flex w-[640px] h-[284px]  p-4 justify-between items-center border-b">
        <h1 className="text-[16px] text-[#0F172A] ml-4 text-">
          Income - Expense
        </h1>
        <p className="text-[16px] text-[#6B7280)]">Jun 1 - Nov 30</p>
      </div>
      <div className="flex py-8 px-6 flex-col items-start gap-10 ">
        <div className="flex items-start gap-[70px] ">
          <div className="w-[170px] h-[170px]">
            <Piechart />
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 w-[103px]">
                <BLuedoth />
                <p className="text-[14px] ">Bils</p>
              </div>
              <p className="text-[14px] w-[125px]">5’000’000₮</p>
              <p className="text-[14px]">15.50%</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 w-[103px]">
                <Pinkdoth />
                <p className="text-[14px] ">Bils</p>
              </div>
              <p className="text-[14px] w-[125px]">5’000’000₮</p>
              <p className="text-[14px]">15.50%</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 w-[103px]">
                <Orangedoth />
                <p className="text-[14px] ">Bils</p>
              </div>
              <p className="text-[14px] w-[125px]">5’000’000₮</p>
              <p className="text-[14px]">15.50%</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 w-[103px]">
                <Greendoth />
                <p className="text-[14px] ">Bils</p>
              </div>
              <p className="text-[14px] w-[125px]">5’000’000₮</p>
              <p className="text-[14px]">15.50%</p>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 w-[103px]">
                <Clothes />
                <p className="text-[14px] ">Bils</p>
              </div>
              <p className="text-[14px] w-[125px]">5’000’000₮</p>
              <p className="text-[14px]">15.50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
