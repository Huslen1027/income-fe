import Vector from "@/components/icons/Vector";
import Geld from "@/components/icons/Geld";
import Link from "next/link";
export default function CreateAcc() {
  return (
    <div
      className="flex w-full
     h-[1050px] relative"
    >
      <div
        className="w-[50%]
       h-[1050px] left-[1032px] absolute bg-blue-600"
      ></div>
      <div className="left-[112px] top-[200.84px] absolute flex-col justify-start items-center gap-10 inline-flex w-[50%] h-full">
        <div className="flex justify-center items-center gap-4">
          <Vector />
          <Geld />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="text-slate-900 text-2xl font-semibold   leading-loose">
            Create Geld account
          </div>
          <div className="text-slate-700 text-base font-normal   leading-normal">
            Sign up below to create your Wallet account
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[352px] ">
          <input
            className="w-96 h-12 px-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder="Name"
          />
          <input
            className="w-96 h-12 px-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder="Email"
          />
          <input
            className="w-96 h-12 px-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder="Password"
          />
          <input
            className="w-96 h-12 px-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder=" Re-password"
          />
          <Link href="/login">
            <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
              <button className="text-white text-xl font-normal   leading-7">
                Log in
              </button>
            </div>
          </Link>
        </div>

        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal   leading-normal">
            Already have account?
          </div>
          <Link href="/login">
            <div className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
              <button className="text-blue-600 text-base font-normal   leading-normal">
                Log in
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
