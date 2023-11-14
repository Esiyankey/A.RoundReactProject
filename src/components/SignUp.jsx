import React from "react";
import musicImage from "../assets/music-image2.jpg";
import "../styles/signup.css";
export const SignUp = () => {
  return (
    <div className="bg-white flex  h-[100vh] justify-center items-center text-center ">
      {/* <div className="w-[60%] h-[700px]">
        <div className="flex">
          <div className="w-[50%] bg-blue-300 relative">
            <div className="w-full h-full flex justify-center items-center bg-gray-50 z-10 absolute opacity-40">
            </div>
            <img src={musicImage} />
            </div>
            
            </div>
          </div> */}
      {/* <div className=" p-12 flex justify-center items-center bg-white "> */}
      <div className=" p-10 w-[450px] rounded-lg bg-white shadow-custom ">
        <h1 className="text-5xl font-bold z-20 ">Getting Started</h1>
        <h3 className="text-sm my-2">
          Sign up now – it's quick, easy, and hassle-free!
        </h3>
        <form>
          <div>
            <button className="flex items-center bg-blue-500">
              <button></button>
              signup with google
            </button>
          </div>
          <div className="flex gap-2 my-8">
            <div className="flex flex-col items-start ">
              <label>Name</label>
              <input placeholder="name" type="text" />
            </div>
            <div className="flex flex-col items-start ">
              <label>Username</label>
              <input placeholder="username" type="text" />
            </div>
          </div>
          <div className="flex flex-col items-start my-8 ">
            <label>Email</label>
            <input placeholder="email" type="text" />
          </div>
          <div className="flex flex-col items-start my-8">
            <label>Password</label>
            <input placeholder="password" type="password" />
          </div>
          <div className="flex flex-col items-start">
            <label>Confirm Password</label>
            <input placeholder="confirm password" type="password" />
          </div>
          <button className="">Create Account</button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};
