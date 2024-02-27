import July from "./July";

export default function IncomeExpense1() {
  return (
    <div className="flex w-[580px] h-[284px] flex-col items-start rounded-xl bg-[#FFF]">
      <div className="flex w-[580px] h-[284px] p-4 justify-between items-center border-b">
        <h1 className="text-[16px] text-[#0F172A] ml-4 text-">
          Income - Expense
        </h1>
      </div>
      <div className="flex jusitfy-center items-center ">
        <July />
      </div>
    </div>
  );
}
