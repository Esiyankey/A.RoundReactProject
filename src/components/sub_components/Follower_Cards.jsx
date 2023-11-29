import React from 'react'

export const Follower_Cards = () => {
  return (
    <div className="grid grid-cols-2 mt-9 gap-6 md:grid-cols-4 w-[350px] md:w-[810px] md:mt-[5rem] m-auto md:gap-[1rem] lg:w-[940px]">
            <div className="shadow-xl w-[9rem] md:w-[12rem] lg:w-[14rem] shadow-[rgba(13,18,36,1)] bg-[rgba(35,27,76,1)]  dark:shadow-none border border-[#1f223c] dark:border-blue-850  dark:bg-blue-750 rounded-md relative">
              <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-center p-8 ">
                <p className="font-bold mb-2 text-violet-500 dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
                  10M+
                </p>
                <p className="mb-0 leading-5 text-sm text-[#d3d8e8]  lg:text-base">
                  Students taught
                </p>
              </div>
            </div>
            <div className="shadow-xl w-[9rem]  md:w-[12rem] lg:w-[14rem] shadow-[rgba(13,18,36,1)] bg-[rgba(35,27,76,1)] dark:shadow-none border border-[#1f223c] dark:border-blue-850  dark:bg-blue-750 rounded-md relative">
              <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-green-600 to-transparent  w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-center p-8 ">
                <p className="font-bold mb-2 text-[#66cfaf] dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
                  30M
                </p>
                <p className="mb-0 leading-5 text-sm text-[#d3d8e8]  lg:text-base">
                  Youtube Fans
                </p>
              </div>
            </div>
            <div className="shadow-xl w-[9rem] md:w-[12rem] lg:w-[14rem] shadow-[rgba(13,18,36,1)] bg-[rgba(35,27,76,1)] dark:shadow-none border  border-[#1f223c] dark:border-blue-850  dark:bg-blue-750 rounded-md relative">
              <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-center p-8 ">
                <p className="font-bold mb-2 text-[#e95ccb] dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
                  20+
                </p>
                <p className="mb-0 leading-5 text-sm  text-[#d3d8e8] lg:text-base">
                  Years of experience
                </p>
              </div>
            </div>
            <div className="shadow-xl w-[9rem] md:w-[12rem] lg:w-[14rem] shadow-[rgba(13,18,36,1)] bg-[rgba(35,27,76,1)] dark:shadow-none border border-[#1f223c] dark:border-blue-850  dark:bg-blue-750 rounded-md relative">
              <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-center p-8 ">
                <p className="font-bold mb-2 text-[#ee9e1e] dark:text-violet-60 text-2xl md:text-3xl lg:text-4xl">
                  49
                </p>
                <p className="mb-0 leading-5 text-sm  text-[#d3d8e8] lg:text-base">
                  Music courses
                </p>
              </div>
            </div>
          </div>
  )
}
