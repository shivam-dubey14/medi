import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-green-300">
        <footer class="w-[80%] mx-auto flex justify-evenly mt-6">
          <div class="text-[#569583] flex flex-col items-start gap-2 justify-evenly ml-10 ">
            <h3 class="text-lg font-semibold mb-2">MedEvidences</h3>
            <p class="text-sm text-gray-600">Evidence based </p>
            <p class="text-sm text-gray-600"> actionable Intelligence </p>
            <p class="text-sm text-gray-600">Tested</p>
            <p class="text-sm text-gray-600"> Food & Wellness </p>
            <div className="icons  flex items-center justify-start text-xl gap-5 mt-7">
              <CiFacebook />
              <FaInstagram />
              <FiTwitter />
            </div>
          </div>
          <div class="text-[#569583] flex flex-col items-start gap-2 justify-evenly ml-10 ">
            <h3 class="text-lg font-semibold mb-2">QuickLinkes</h3>
            <p class="text-sm text-gray-600">Evidence based </p>
            <p class="text-sm text-gray-600">Terms of Service</p>
            <p class="text-sm text-gray-600">Contact Us</p>
            <p class="text-sm text-gray-600">Security and Compliance </p>
            <p class="text-sm text-gray-600">Privacy Policy </p>
          </div>

          <div class="text-[#569583] flex flex-col items-start gap-2 justify-start ">
            <h3 class="text-lg font-semibold mb-2">Contact us</h3>
            <p className="text-sm text-gray-600 flex gap-2 ">
              <IoMdMail />
              About Us
            </p>

            <p className="text-sm text-gray-600 flex gap-2 ">
              <FaPhoneAlt />
              124342513
            </p>
             <p className="text-sm text-gray-600 flex gap-2 ">
               <MdOutlineLocationOn></MdOutlineLocationOn>
              USA
            </p>
          </div>
        </footer>
        <br />
        <div className="flex items-center h-20 justify-center  ">
           <p class="text-sm text-gray-600">© 2025 MedEvidences. All rights reserved. </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
