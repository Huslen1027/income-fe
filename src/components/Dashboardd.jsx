import TotalE from "./TotalE";
import IncomeY from "./IncomeY";
import IncomeExpense from "./Donut";
import Noise from "./Noise";
import IncomeExpense1 from "./IncomeExpense1";
import LastRecords from "./LastRecords";
export default function Dashboardd() {
  return (
    <div className="flex gap-5 bg-[#F3F4F6] h-[1148px] flex-col px-[120px] max-w-[1440px] m-auto">
      <div className="flex justify-between">
        <Noise />
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
