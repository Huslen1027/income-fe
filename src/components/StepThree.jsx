import Geld from "@/components/icons/Geld";
import Vector from "@/components/icons/Vector";
import Link from "next/link";
export default function StepThree({ setShowLoad }) {
  return (
    <div className="flex  py-10 flex-col items-center gap-[141px] bg-[#FFF] h-[1000px] ">
      <div className="flex flex-col items-center gap-10">
        <div className="flex p-[6px] items-center gap-[11px] justify-center">
          <Vector />
          <Geld />
        </div>
        <ul className="steps bg-[white] gap-4">
          <li className="step step-accent ">Currency</li>
          <li className="step  step-accent ">Balance</li>
          <li className="step  step-accent ">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 w-[384px] h-[308px]">
        <div className="flex flex-col items-center gap-3 ">
          <div className="flex flex-col items-center gap-6">
            <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.7076 9.70757L12.7076 25.7076C12.6147 25.8005 12.5044 25.8743 12.383 25.9246C12.2616 25.975 12.1315 26.0009 12.0001 26.0009C11.8687 26.0009 11.7385 25.975 11.6171 25.9246C11.4957 25.8743 11.3854 25.8005 11.2926 25.7076L4.29257 18.7076C4.10493 18.5199 3.99951 18.2654 3.99951 18.0001C3.99951 17.7347 4.10493 17.4802 4.29257 17.2926C4.48021 17.1049 4.7347 16.9995 5.00007 16.9995C5.26543 16.9995 5.51993 17.1049 5.70757 17.2926L12.0001 23.5863L27.2926 8.29257C27.4802 8.10493 27.7347 7.99951 28.0001 7.99951C28.2654 7.99951 28.5199 8.10493 28.7076 8.29257C28.8952 8.48021 29.0006 8.7347 29.0006 9.00007C29.0006 9.26543 28.8952 9.51993 28.7076 9.70757Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-[24px] text-[#0F172A]">Good Job!</h1>
          </div>
          <p className="text-[12px] text-[#475569] ">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
        </div>
        <Link href="/dashboard">
          <button className="flex w-[384px] h-[48px] gap-1 justify-center items-center rounded-[20px]  bg-[#0166FF] mt-[40px]">
            <p className="text-[#FFFFFF] text-[20px]">Go To Dashboard</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
