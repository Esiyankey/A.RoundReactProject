import React from "react";
import instrumentInstruction from "../assets/instrument-instruction.jpg";

export const Learning_Paths = () => {
    const info = [
        {
            img: instrumentInstruction,
            title: "Fundamentals",
            info: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
            
          },
          {
            img: instrumentInstruction,
            title: "Fundamentals",
            info: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
            
          },
          {
            img: instrumentInstruction,
            title: "Fundamentals",
            info: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
            
          },
          {
            img: instrumentInstruction,
            title: "Fundamentals",
            info: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
            
          },
          {
            img: instrumentInstruction,
            title: "Fundamentals",
            info: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
            
          },
    ]
  return (
    <div className="flex justify-center flex-col mt-20 mb-6 items-center">
      <h1 className="md:text-6xl text-4xl mt-9 font-extrabold text-center text-white">
        Learning Paths
      </h1>
      <h3 className="md:text-2xl text-lg text-center py-6 text-[#ced8e3] ">
        Discover your optimal learning path to reach your full potential.
      </h3>


      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto max-w-[400px] md:mt-11 md:max-w-[700px] lg:max-w-[1150px]  ">
              {info.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="w-[350px]  bg-[#12172a] rounded border overflow-hidden border-[#262b42]"
                  >
                    <div className="relative w-full h-[198px]">
                      <img src={items.img} />
                    </div>
                    <div className="p-6">
                      <h3 className=" leading-4 mb-4 mt-9 text-lg font-semibold text-white">
                        {items.title}
                      </h3>
                      <p className="mb-3 text-base text-[#c9d8e2]"> {items.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
    </div>
  );
};
