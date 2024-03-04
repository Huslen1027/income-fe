import Vector from "@/components/icons/Vector";
import Geld from "@/components/icons/Geld";
import Link from "next/link";
export default function Login() {
  return (
    <div
      className="flex
     min-h-[100vh] relative "
    >
      <div className="flex flex-col justify-center items-center gap-10 w-[50%]">
        <div className="p-[5.40px] justify-start items-center gap-[9.46px] " />
        <div className="flex justify-center items-center gap-4">
          <Vector />
          <Geld />
        </div>

        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="text-slate-900 text-2xl font-semibold   leading-loose">
            Welcome Back
          </div>
          <div className="text-slate-700 text-base font-normal   leading-normal">
            Welcome back, Please enter your details
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <input
            className="w-96 h-12 p-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder="Email"
          />
          <input
            className="w-96 h-12 p-4 bg-gray-100 text-black  rounded-lg border border-gray-300 justify-start items-center inline-flex"
            placeholder="Password"
          />
          <Link href="/signup">
            <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
              <button className="text-white text-xl font-normal   leading-7">
                Log in
              </button>
            </div>
          </Link>
        </div>
        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal   leading-normal">
            Don’t have account?
          </div>
          <div className="w-[80px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
            <Link
              href="/signup
            "
            >
              <button className="text-blue-600 text-base font-normal leading-normal">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-[50%]
   bg-blue-600"
      ></div>
    </div>
  );
}
