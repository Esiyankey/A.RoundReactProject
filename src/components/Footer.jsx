import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BiLogoYoutube, BiLogoFacebookCircle } from "react-icons/bi";

function Footer(){
  return (
    <footer className="w-full py-9  flex mt-9 border-t-[1px] border-[#262b42]  text-white flex-col md:justify-evenly md:flex-row justify-center items-center">
      <div>
        <h3> &copy; A.Round Lessons</h3>
      </div>
      <div className="flex gap-2 my-2">
        <BiLogoYoutube />
        <BsTwitter />
        <BiLogoFacebookCircle />
      </div>
      <div className="flex gap-9 ">
        <h4 className="my-2"> Terms of use</h4>
        <h4 className="my-2">Privacy Policy</h4>
      </div>
    </footer>
  );
};
export default Footer;