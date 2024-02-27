import Geld from "@/components/icons/Geld";
import Vector from "@/components/icons/Vector";
export default function Loading() {
  return (
    <div className="flex p-101 justify-center items-center bg-[#FFF] h-[950px]">
      <div className="flex flex-col items-center gap-9">
        <div className="flex items-center gap-[17px] p-[10px]">
          <Vector />
          <Geld />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <button className=" btn-square ">
            <span className="loading loading-spinner"></span>
          </button>
          <p className="text-black font-semibold">Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
}
