import React from "react";
import { HiChartBar } from "react-icons/hi";

export const Subscription = () => {
  return (
    <div className="mt-36 flex flex-col lg:flex-row mx-5 ">
      <div className="lg:flex-[50%]">
        <h1 className="md:text-5xl text-white font-bold ">All-Access Subscription</h1>
        <p className="text-xl text-[#b4bdca] md:w-[600px] my-5">
          Become the best musician you can be with unlimited access to all the
          existing and future courses{" "}
        </p>
        <div>
          <span>4.7</span> <span>2867 reviews</span>
        </div>
        <h3 className="text-lg text-[#b4bdca]">Subscribe now to access all courses. Cancel anytime</h3>
        <button className="my-6 rounded-full backgroundGradientButton px-3 py-2 text-lg font-medium text-white">SUBSCRIBE FOR $124.5/Y </button>
        <div className="text-xl text-white">----OR----</div>
        <button className="my-6 rounded-full bg-blue-600 px-4 py-3 text-lg font-medium text-white">SUBSCRIBE FOR $29/M</button>
      </div>
      <div className="lg:flex-[50%]">
        <div className="flex flex-col justify-center items-center  ">
          <div className="w-[300px] md:w-full border p-16">
            <h1 className="text-xl text-white my-3 font-semibold">COURSE OVERVIEW</h1>
            <div className="h-[5px] my-2 w-20  backgroundGradientButton"></div>
            <p className="text-xl text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Beginner to Pro</h2>
            </p>
            <p className="text-xl my-2 text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Hours of HD video</h2>
            </p>
            <p className="text-xl  my-2 text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Downloadable Content</h2>
            </p>
            <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Hands-on exercises</h2>
            </p>
            <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>English captions</h2>
            </p>
            <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Certificate of completion</h2>
            </p>
            <p className="text-xl  my-2 text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Lifetime access</h2>
            </p>
            <p className="text-xl my-2  text-[#b4bdca] flex items-center gap-4 ">
              <HiChartBar />
              <h2>Learn at your own pace </h2>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
