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
        <h3>Subscribe now to access all courses. Cancel anytime</h3>
        <button>SUBSCRIBE FOR $124.5/Y </button>
        <button>SUBSCRIBE FOR $29/M</button>
      </div>
      <div className="lg:flex-[50%]">
        <div className="flex justify-center items-center border ">
          <div className="">
            <h1>COURSE OVERVIEW</h1>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
            <p>
              <HiChartBar />
              <h2>COURSE OVERVIEW</h2>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
