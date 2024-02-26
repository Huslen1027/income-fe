import TotalE from "./TotalE";
import IncomeY from "./IncomeY";
import Piechart from "@/components/Piechart";
export default function Sign() {
  return (
    <div className="flex justify-center gap-5 bg-[#F3F4F6] h-[1148px]">
      <IncomeY />
      <TotalE />
      <Piechart />
    </div>
  );
}
