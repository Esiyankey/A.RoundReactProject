import { useState,useEffect } from "react";
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


export const Courses = () => {
  const [search, setSearch] = useState("");
 
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

  return (
    <>
    
  
        <div>
          <header className="flex flex-col justify-center items-center mt-40">
            <h1 className="lg:text-6xl md:text-4xl font-bold text-white">Level Up Your Music Skills</h1>
            <p className="flex justify-center items-center text-[1.7rem] text-center w-[1100px] text-[#adb0ca] mt-9">
              Whether you want to excel in Music Theory, Music or strengthen your
              fundamental software engineering skills, there is a course for you.
            </p>
          </header>
          <div className="my-16 ml-6 flex md:justify-center items-center  lg:max-w-[930px] m-auto  ">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="p-3  w-[350px] border border-[rgb(38,43,66)] bg-[#12172a] rounded "
            />
          </div>
          <div>
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
                      <span className="font-semibold text-lg text-white">
                        {items.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      
    </>
  );
};
