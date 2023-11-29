import React from 'react'

export const Video_Section = () => {
  return (
    <div className="flex flex-col items-center  ">
            <h3 className="text-[#696bfe] text-[1.4rem]">Hello,</h3>
            <h3 className="text-white text-xl md:text-[2rem] my-4 font-bold">
              This is A.round lessons,
            </h3>
            <p className="text-[#d2d8c8]  mt-[2rem] text-base md:text-[1.2rem] flex items-center w-[23.4rem] justify-center md:w-[44rem] text-center mb-[3rem]">
              Feeling stuck or overwhelmed in your musical quest? <br />
              No worries,I've got your back! Together, we'll harmonize your
              skills, and compose a brighter future.
            </p>
            <div className=" w-[380px] my-12 flex items-center justify-center md:w-[750px] ">
              <video controls width="100%" height="100%">
                <source src="https://youtu.be/XwCad_n5HLY" type="video/mp4" />
              </video>
            </div>
          </div>
  )
}
