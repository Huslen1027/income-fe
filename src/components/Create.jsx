import Vector from "./icons/Vector";
import Geld from "./icons/Geld";
import Link from "next/link";
export default function Create({ setShowLoad }) {
  return (
    <div
      className="flex 
     min-h-[100vh] relative"
    >
      <div className="flex flex-col justify-center items-center gap-10 w-[50%]">
        <div className="flex justify-center items-center gap-4">
          <Vector />
          <Geld />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="text-slate-900 text-2xl font-semibold   leading-loose">
            <p> Create Geld account</p>
          </div>
          <div className="text-slate-700 text-base font-normal   leading-normal">
            <p> Sign up below to create your Wallet account</p>
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

          <div
            onClick={() => {
              setShowLoad("StepOne");
            }}
            className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
          >
            <button className="text-white text-xl font-normal   leading-7">
              Sign up
            </button>
          </div>
        </div>

        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal   leading-normal">
            <p> Already have account?</p>
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
      <div
        className="w-[50%]
        bg-blue-600"
      ></div>
    </div>
  );
}
