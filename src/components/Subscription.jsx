import React from "react";
import { HiChartBar } from "react-icons/hi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { BiCaptions } from "react-icons/bi";
import { BsInfinity } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi2";

export const Subscription = () => {
  return (
    <div className=" flex flex-col   md:mx-5 ">
      <div className="md:items-start max-w-[1400px] m-auto gap-80 flex lg:items-center">
        <div className="lg:flex-[50%] flex flex-col items-start">
          <h1 className="md:text-5xl text-white font-bold ">
            All-Access Subscription
          </h1>
          <p className="text-xl text-[#b4bdca] md:w-[600px] my-5">
            Become the best musician you can be with unlimited access to all the
            existing and future courses{" "}
          </p>
          <div>
            <span>4.7</span> <span>2867 reviews</span>
          </div>
          <h3 className="text-lg text-[#b4bdca]">
            Subscribe now to access all courses. Cancel anytime
          </h3>
          <button className="my-6 rounded-full backgroundGradientButton px-3 py-2 text-lg font-medium text-white">
            SUBSCRIBE FOR $124.5/Y{" "}
          </button>
          <div className="text-xl text-white">----OR----</div>
          <button className="my-6 rounded-full bg-blue-600 px-4 py-3 text-lg font-medium text-white">
            SUBSCRIBE FOR $29/M
          </button>
        </div>
        <div className="lg:flex-[50%] md:my-12 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center  ">
            {/* <div class="flex justify-center  -translate-y-[1px]">
            <div class="w-3/4">
              <div class="flex flex-row">
                <div class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 md:w-[800px] lg:w-[400px]"></div>
                <div class="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
              </div>
            </div>
          </div> */}
            <div className=" bg-[#11152c] lg:w-[400px] md:w-[800px] p-16">
              <h1 className="text-xl text-white my-3 font-semibold">
                COURSE OVERVIEW
              </h1>
              <div className="h-[5px] my-2 w-20  backgroundGradientButton"></div>
              <p className="text-xl text-[#b4bdca] flex items-center gap-4 ">
                <HiChartBar />
                <h2>Beginner to Pro</h2>
              </p>
              <p className="text-xl my-2 text-[#b4bdca] flex items-center gap-4 ">
                <MdOutlineSlowMotionVideo />
                <h2>Hours of HD video</h2>
              </p>
              <p className="text-xl  my-2 text-[#b4bdca] flex items-center gap-4 ">
                <FaCloudDownloadAlt />
                <h2>Downloadable Content</h2>
              </p>
              <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
                <IoIosCode />
                <h2>Hands-on exercises</h2>
              </p>
              <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
                <BiCaptions />
                <h2>English captions</h2>
              </p>
              <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
                <HiChartBar />
                <h2>Certificate of completion</h2>
              </p>
              <p className="text-xl  my-2 text-[#b4bdca] flex items-center gap-4 ">
                <BsInfinity />
                <h2>Lifetime access</h2>
              </p>
              <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
                <HiOutlineClock />
                <h2>Learn at your own pace </h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
