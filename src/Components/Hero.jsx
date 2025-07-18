import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Signup from "./Signup";
      import { CiMail } from 'react-icons/ci';


function Hero() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-300 h-screen ">
      <div className="nav flex justify-between h-24 items-center  ">
        <div className="images  ml-7  flex items-center">
          <img
            className="h-12"
            src="https://medevidences.com/_next/image?url=%2Flogo1.png&w=1920&q=75"
            alt=""
          />
          <div className="font-semibold text-2xl text-[#306d57]">
            MedEvidences
          </div>
        </div>
        <div className="buttons  mr-10 justify-between gap-7 flex h-full items-center ">
          <button className="h-[60%] bg-[#919d94] w-32 rounded-full font-semibold text-lg text-sky-50">
            LOGIN
          </button>
          <button onClick={<Signup/>} className="h-[60%] bg-[#85b29f] w-32 rounded-full font-semibold text-lg text-sky-50">
            SIGNUP
          </button>
        </div>
      </div>
  


      <div className="image-section flex flex-col items-center mt-12 hover:motion-preset-expand ">
        <img
          className="h-48 w-auto object-contain"
          src="https://medevidences.com/_next/image?url=%2Flogo1.png&w=1920&q=75"
          alt=""
        />
        <div className="text-3xl text-[#306d57] font-semibold mt-4">
          MedEvidences
        </div>
      </div>
      <div className="button-section flex items-center mt-20 flex-col justify-center h-48 ">
        <div className="text-xl  text-[#2d6a4f] font-medium  ">
          Unlock the most powerful Medical Research
        </div>
        <div className="text-xl text-[#2d6a4f] font-medium"> Assistant</div>
        <div className="h-14 w-[40%] bg-[#7DAFA1] flex items-center justify-between rounded-full mt-5 text-lime-50">
          <div className="text ml-4 motion-preset-blink   motion-duration-1500">
            Ask Medical Questions
          </div>

          <button className=" mr-4 rounded-full  w-3">
            <FaArrowRight />
          </button>
          
        </div>
      </div>


    </div>
  );
}

export default Hero;
