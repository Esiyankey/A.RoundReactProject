import { useState } from "react";
import { BsArrowRight, BsYoutube, BsClockFill, BsCheck2 } from "react-icons/bs";
import aroundImage from "../assets/aroundImage.png";
import aroundImage2 from "../assets/aroundImage2.png";
import aroundImage3 from "../assets/aroundImage3.png";
import aroundImage4 from "../assets/aroundImage4.png";
import instrumentInstruction from "../assets/instrument-instruction.jpg";
import voiceTraning from "../assets/voice-training.jpg";
import jazz from "../assets/jazz.jpg";
import soundEngeneering from "../assets/sound-engeneering.jpg";
import songWriting from "../assets/song-writing.jpg";
import musicTherapy from "../assets/music-therapy.jpg";
import { Link } from "react-router-dom";
import { Video_Follower_Section } from "./Video_Follower_Section";

function homepage() {
  const info = [
    {
      img: instrumentInstruction,
      title: "Instrument Instruction",
      info: "Courses for specific instruments like piano, guitar, violin, and more. These can range from beginner to advanced levels.",
      price: "$95",
    },
    {
      img: voiceTraning,
      title: "Voice Training",
      info: "Courses for developing vocal skills, which can include singing techniques, breathing exercises, and vocal health.",
      price: "$70",
    },
    {
      img: soundEngeneering,
      title: "Sound Engeneering",
      info: "Courses for aspiring audio engineers and technicians who work with live sound and recording.",
      price: "$62",
    },
    {
      img: songWriting,
      title: "Song Writing",
      info: "Courses that teach the art of composing music and creating original songs.",
      price: "$195",
    },
    {
      img: jazz,
      title: "Jazz",
      info: " Explore the history and performance of jazz music.",
      price: "$84",
    },
    {
      img: musicTherapy,
      title: "Music theory",
      info: "Courses in music theory cover the fundamental principles of music, including notation, scales, chords, and harmony.",
      price: "$95",
    },
  ];
  const features = [
    "Comprehensive Courses",
    "330 hours of HD video",
    "Downloadable content",
    "Hands-on exercises",
    "English captions",
    "Certificate of completion",
    "Access while subscribed",
    "Learn at your own pace",
  ];
  return (
    <>
      <div className="max-w-[1400px] overflow-x-hidden m-auto ">
        <section>
          <div className="block my-36">
            <div className="  md:w-[680px]   m-auto ml-4 mt-[5rem] lg:mt-[6rem]">
              <h1 className="text-[2.2rem] md:text-[2.7rem] lg:text-[5rem] font-extrabold leading-10 md:leading-[3rem] text-white">
                Become the <span className="text-[#7bf9b8]">musician</span> you{" "}
                <span className="text-[#e72ead]">desire </span>to be
              </h1>
              <h3 className="text-[1.15rem] md:[1.2rem] text-[#d1d5d0] mt-9">
                All the <span className="text-white">music courses</span> you
                need to excel <span className="text-white">in one place.</span>
              </h3>
              {/* <Link to="/courses" className="mt-8  px-4  text-white backgroundGradientButton duration-500 transition-all flex gap-4 items-center mb-8 bg-gray-200 rounded-[30px] py-2 md:py-3">
                VIEW COURSES
                <BsArrowRight className="font-bold" />
              </Link> */}
            </div>
          </div>
        </section>
        <Video_Follower_Section />
      </div>
      <section className="border-t-2 border-t-[#262b42] w-[100%] pt-[2rem]">
        <header className="flex flex-col justify-center items-center my-12 mx-6">
          <p className="text-[1.2rem] text-[#9e7cf3]">Features</p>
          <h3 className="md:text-[30px] text-2xl text-white font-bold">
            Why learn with A.round
          </h3>
        </header>
        <div className=" max-w-[1200px] m-auto mt-16">
          <div className="grid grid-cols-1 mt-28 gap-8 my-20 md:my-32 md:grid-cols-2">
            <div className="md:mx-4 mx-2">
              <button className="w-[3.4rem]  h-[3.4rem] flex justify-center mb-5 items-center rounded-[50%] bg-[#8080802a]">
                <BsClockFill className="text-[1.7rem] text-[#a679ff] " />
              </button>
              <h3 className="text-base mb-2 text-[#956ffd] font-semibold leading-9">
                Fast-track your learning
              </h3>
              <h1 className="text-2xl md:text-3xl text-white mb-[1rem] font-bold">
                No fluff,just the good stuff
              </h1>
              <p className="md:text-lg text-base w-[23rem] text-[#c9d8e8] md:w-[32rem]">
                I don't want to waste your time with boring stuff you don't
                need. So I've made sure my courses are clear, concise, to the
                point, and free of technical jargon. No rambling or repetition,
                just the essentials you need to succeed, explained in plain
                English.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className=" w-80 relative md:w-[400px] h-[300px]">
                <img src={aroundImage} />
              </div>
            </div>
          </div>
          <div className="md:grid   flex flex-col-reverse mt-28 gap-8 my-20 md:my-32 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className=" w-80 relative md:w-[400px] h-[300px]">
                <img src={aroundImage2} />
              </div>
            </div>
            <div className="md:mx-4 mx-2">
              <button className="w-[3.4rem] h-[3.4rem] flex justify-center mb-5 items-center rounded-[50%] bg-[#8080802a]">
                <BsClockFill className="text-[1.7rem] text-[#a679ff] " />
              </button>
              <h3 className="text-base mb-2 text-[#dc60bc] font-semibold leading-9">
                Step-by-step lessons
              </h3>
              <h1 className=" text-2xl md:text-3xl text-white mb-[1rem] font-bold">
                Easy-to-follow lessons
              </h1>
              <p className=" text-base md:text-lg w-[23rem] text-[#c9d8e8] md:w-[32rem]">
                I know learning to code can be tough. So I've carefully
                organized my courses into simple, bite-sized pieces to help you
                progress smoothly, one step at a time. I'll guide you through
                each step of the way so you won't feel overwhelmed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-28 gap-8 my-10 md:my-32 md:grid-cols-2">
            <div className="mx-4 ">
              <button className="w-[3.4rem] h-[3.4rem] flex justify-center mb-5 items-center rounded-[50%] bg-[#8080802a]">
                <BsYoutube className="text-[1.7rem] text-[#6cccaf] " />
              </button>
              <h3 className="text-base mb-2 text-[#6cccaf] font-semibold leading-9">
                Perfect mix of theory and practice
              </h3>
              <h1 className=" text-2xl md:text-3xl text-white mb-[1rem] font-bold">
                Hands-on learning
              </h1>
              <p className=" text-base md:text-lg w-[23rem]  text-[#c9d8e8] md:w-[32rem]">
                I believe the best way to learn is by actually doing. That's why
                my courses teach you the essential theory and provide practical
                exercises. You'll be able to practice everything you learn and
                apply it to real-life situations.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-80 relative md:w-[400px] h-[300px]">
                <img src={aroundImage3} />
              </div>
            </div>
          </div>
          <div className="md:grid  flex flex-col-reverse mt-28 gap-8 my-10 md:my-32 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="w-80 relative md:w-[400px] h-[500px]">
                <img src={aroundImage4} />
              </div>
            </div>
            <div className="mx-4 ">
              <button className="w-[3.4rem] h-[3.4rem] flex justify-center mb-5 items-center rounded-[50%] bg-[#8080802a]">
                <BsClockFill className="text-[1.7rem] text-[#a679ff] " />
              </button>
              <h3 className="text-base  mb-2 text-[#a15bb2] font-semibold leading-9">
                Get ready for the job
              </h3>
              <h1 className="md:text-3xl text-2xl text-white mb-[1rem] font-bold">
                Real-world projects
              </h1>
              <p className="text-base md:text-lg w-[23rem] text-[#c9d8e8] md:w-[32rem]">
                My courses are designed to prepare you for real-world jobs and
                interviews. With in-depth, comprehensive courses packed with
                real-world examples and exercises, you'll be ready to take on
                any challenge that comes your way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <header className="flex flex-col text-center items-center mt-20 justify-center">
          <h4 className="text-sm text-[#9e7cf8]">TOP-SELLING COURSES</h4>
          <h1 className="text-4xl text-white my-8 font-bold">
            Level Up Your Music Skills
          </h1>
          <p className="md:w-[700px] w-[330px] text-[22px] text-[#d2d8d6]">
            Whether you're looking to switch to a career in tech or to advance
            in your current role, my courses give you the knowledge and
            experience you need to succeed.
          </p>
        </header>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto max-w-[400px] md:max-w-[700px] lg:max-w-[1150px]  ">
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
                    <p className="mb-3 text-base text-[#c9d8e2]">
                      {" "}
                      {items.info}
                    </p>
                    <span className="font-semibold text-lg text-white">
                      {items.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div  className="text-center mb-4 ">
          <Link to="/courses" className=" text-white rounded-[30px] font-semibold px-7 py-4 bg-[#8244ff]">
            VIEW ALL COURSES
          </Link>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="mt-16 p-9 flex flex-col border  w-[350px] relative md:w-[480px] rounded-md border-[#262b42] bg-[#14182d]">
          <img
            src="https://codewithmosh.com/_next/static/media/money-back.160ae298.svg"
            className="absolute w-12 -left-9 -top-12"
          />
          <header className="flex justify-center items-center flex-col">
            <span className="font-bold text-4xl text-pink-500">$29/M</span>
            <h3 className="font-medium text-sm tracking-wider text-white">
              ALL COURSES
            </h3>
          </header>
          <div className="mt-9">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 my-5 justify-start text-lg font-semibold text-white"
              >
                <BsCheck2 className="w-9 " />
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="ont-semibold px-5 py-3 w-56 rounded-[30px] text-white  backgroundGradientButton font-semibold">
              SUBSCRIBE & SAVE
            </button>
          </div>
          <h4 className="text-center mt-2  text-[#c9d8e2]">Cancel anytime!</h4>
        </div>
      </section>
    </>
  );
}

export default homepage;
