import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import AroundGradient from "../assets/a-round-gradient.png"
import AroundLogo from "../assets/a-round.png"
import "../styles/navbar.css"
import { Link } from "react-router-dom";



function Navbar  (){
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={`flex  justify-between  lg:px-60  top-0 fixed w-full z-20 m-auto  items-center  lg:flex ${
          scroll ? "active" : ""
        }`}
      >
        <div className="flex leading-none relative right-4 sm-right-0 ">
         
            <img
              src={AroundGradient}
              alt="A.round logo"
              width={100}
             height={10}
           
            />
         
         
            <img
              src={AroundLogo}
              alt="A.round logo"
              className="relative right-7  "
              width={100}
              height={10}
            />
          
        </div>
        <div className=" leading-none items-center   md:flex">
          <div className={`left-[10rem] flex gap-7 font-[500] pl-7  `}>
            <ul className="md:flex  md:items-center md:justify-center cursor-pointer md:gap-9 text-[0.9rem] md:text-[0.84rem] text-[#ced8e3]">
              <li className="hover:text-white duration-700 py-3 md:py-0">
                Subscription
              </li>
              <li className="hover:text-white  duration-700 py-3  md:py-0">
                Courses
              </li>
              <li className="hover:text-white duration-700   md:py-0 py-3">
                Learning Paths
              </li>
              <li className="hover:text-white duration-700  md:py-0 py-3">
                Forum
              </li>
              <Link
                to="/contact"
                className="hover:text-white duration-700  md:py-0 py-3"
              >
                Contact
              </Link>
            </ul>
            <Link
              to="/login"
              className=" px-2 py-1 md:px-3 md:py-3 text-[#ffffff] bg-[#8244ff]  text-[0.7rem] md:text-[1rem] relative right-4 sm:right-0  rounded-[30px] hover:bg-[#6d32e4] duration-700"
            >
              Member Area
            </Link>
          </div>
        </div>
        <button className="p-2  mr-2 md:mr-6 rounded">
          <FaBars
            className="text-[#4e536a] text-[1.4rem] md:hidden "
            onClick={handleShowMenu}
          />
        </button>
      </div>
      {/* 
            "use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
     
      <nav className="flex justify-between md:block lg:top-0 relative  lg:max-w-[1400px]  m-auto  items-center  lg:flex ">
              <div className="flex leading-none relative right-4 sm-right-0 ">
                <Image
                  src="/images/a-round-gradient.png"
                  alt="A.round logo"
                  width={100}
                  height={10}
                />
                <Image
                  src="/images/a-round.png"
                  alt="A.round logo"
                  className="relative right-7 "
                  width={100}
                  height={10}
                />
              </div>
              <div className=" leading-none items-center   md:flex">
                <div
                  className={` duration-700 transition-all border-b-1 lg:relative lg:top-0 lg:left-[10rem] md:border-b-0 border-[rgba(13,18,36,1)] bg-[rgba(13,18,36,1)]  sm:bg-transparent w-full  md:flex gap-7 font-[500] md:bg-none  md:fixed   absolute left-0 top-[4rem]  pl-7 slide-down-menu ${
                    showMenu ? "block" : "hidden"
                  }`}
                >
                  <ul className="md:flex  md:items-center md:justify-center cursor-pointer md:gap-9 text-[0.9rem] md:text-[0.84rem] text-[#ced8e3]">
                    <li className="hover:text-white duration-700 py-3 md:py-0">
                      Subscription
                    </li>
                    <li className="hover:text-white  duration-700 py-3  md:py-0">
                      Courses
                    </li>
                    <li className="hover:text-white duration-700   md:py-0 py-3">
                      Learning Paths
                    </li>
                    <li className="hover:text-white duration-700  md:py-0 py-3">
                      Forum
                    </li>
                    <Link href="/contact" className="hover:text-white duration-700  md:py-0 py-3">
                      Contact
                    </Link>
                  </ul>
                  <button className=" px-2 py-1 md:px-3 md:py-3 text-[#ffffff] bg-[#8244ff]  text-[0.7rem] md:text-[1rem] relative right-4 sm:right-0  rounded-[30px] hover:bg-[#6d32e4] duration-700">
                    Member Area
                  </button>
                </div>
              </div>
              <button className="p-2  mr-2 md:mr-6 rounded">
                <FaBars
                  className="text-[#4e536a] text-[1.4rem] md:hidden "
                  onClick={handleShowMenu}
                />
              </button>
              
            </nav>
    </>
  );
};
 */}
    </>
  );
};

export default Navbar;