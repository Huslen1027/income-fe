import July from "./July";

export default function IncomeExpense1() {
  return (
    <div className="flex w-[580px] h-[284px] flex-col items-start rounded-xl bg-[#FFF] relative">
      <div className="flex w-[580px] h-[284px] p-4 justify-between items-center border-b">
        <h1 className="text-[16px] text-[#0F172A] pl-4 text-">
          Income - Expense
        </h1>
      </div>
      <div className="flex jusitfy-center items-center w-[580px] h-[284px] pl-2">
        <July />
      </div>
    </div>
  );
}
