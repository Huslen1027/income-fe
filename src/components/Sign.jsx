import TotalE from "./TotalE";
import IncomeY from "./IncomeY";
import IncomeExpense from "./IncomeExpense";
import Total from "./Total";
import IncomeExpense1 from "./IncomeExpense1";
import LastRecords from "./LastRecords";
export default function Sign() {
  return (
    <div className="flex gap-5 bg-[#F3F4F6] h-[1148px] flex-col px-[120px] ">
      <div className="flex justify-between">
        <Total />
        <IncomeY />
        <TotalE />
      </div>

      <div className="flex justify-between">
        <IncomeExpense1 />
        <IncomeExpense />
      </div>
      <LastRecords />
    </div>
  );
}
