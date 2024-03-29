import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import Create from "@/components/Create";
import { useState } from "react";
export default function Signup() {
  const [showLoad, setShowLoad] = useState("signup");
  return (
    <div>
      <div className={`${showLoad == "signup" ? "block" : "hidden"}`}>
        <Create showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepOne" ? "block" : "hidden"}`}>
        <StepOne showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepTwo" ? "block" : "hidden"}`}>
        <StepTwo showLoad={showLoad} setShowLoad={setShowLoad} />
      </div>
      <div className={`${showLoad == "StepThree" ? "block" : "hidden"}`}>
        <StepThree />
      </div>
    </div>
  );
}
