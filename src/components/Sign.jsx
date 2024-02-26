import TotalE from "./TotalE";
import IncomeY from "./IncomeY";
import IncomeExpense from "./IncomeExpense";
import Noise from "./Noise";
export default function Sign() {
  return (
    <div className="flex justify-center gap-5 bg-[#F3F4F6] h-[1148px] flex-wrap">
      <IncomeY />
      <TotalE />
      <TotalE />
      <IncomeExpense />
      <Noise />
    </div>
  );
}
