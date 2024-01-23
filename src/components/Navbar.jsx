import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import AroundGradient from "../assets/a-round-gradient.png";
import AroundLogo from "../assets/a-round.png";
import { Link } from "react-router-dom";

function Navbar() {
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
        className={`flex justify-between  lg:pl-44 top-0 fixed w-full z-20 m-auto items-center lg:flex ${
          scroll ? "active" : ""
        }`}
      >
        <Link to="/" className="flex leading-none relative right-4 sm-right-0 ">
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
        </Link>
        <div className=" leading-none items-center pl-40 hidden  md:flex">
          <div className={`left-[10rem]  flex gap-7 font-[500] pl-7 md:left-0 md:pl-0 `}>
            <ul className="md:flex  md:items-center md:justify-center cursor-pointer md:gap-9 text-[0.9rem] md:text-[0.84rem] text-[#ced8e3]">
              <Link to="/subscription" className="hover:text-white duration-700 py-3 md:py-0">
                Subscribe
              </Link>
              <Link to="/courses" className="hover:text-white  duration-700 py-3  md:py-0">
                Courses
              </Link>
              <Link to="/learning-paths" className="hover:text-white duration-700  md:py-0 py-3 ">
                Learning Paths
              </Link>
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
              className=" px-2 text-center py-1  md:py-3 text-[#ffffff] bg-[#8244ff] md:w-[120px] text-[0.7rem] md:text-[0.9rem] relative right-4 sm:right-0  rounded-[30px] hover:bg-[#6d32e4] duration-700"
            >
              Member Area
            </Link>
          </div>
        </div>
        <button className="p-2  mr-6  rounded">
          <FaBars
            className="text-[#4e536a] text-[1.4rem] md:hidden "
            onClick={handleShowMenu}
          />
        </button>
        {showMenu ? (
          <div className="duration-700 transition-all border-b-1 py-5 md:hidden  border-[rgba(13,18,36,1)] bg-[rgba(13,18,36,1)]  sm:bg-transparent w-full   font-[500]    absolute left-0 top-[3.3rem] max-height pl-7 slide-down-menu block">
            <ul className="  cursor-pointer my-5 text-[0.9rem]  text-[#ced8e3]">
              <li className="hover:text-white duration-700 py-2 ">
                Subscribe
              </li>
              <Link to="/courses" className="hover:text-white  duration-700 py-2 ">Courses</Link>
             
              <li className="hover:text-white duration-700  py-2">Forum</li>
              <Link
                to="/contact"
                className="hover:text-white my-2 duration-700  py-2"
              >
                Contact
              </Link>
            </ul>
            <Link
              to="/login"
              className="   mt-7 text-[#ffffff] bg-[#8244ff]   text-[0.7rem]  relative right-4 sm:right-0  rounded-[30px] hover:bg-[#6d32e4] duration-700"
            >
              Member Area
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
