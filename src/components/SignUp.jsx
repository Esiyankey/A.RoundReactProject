import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import musicImage from "../assets/music-image2.jpg";
import "../styles/signup.css";
import { Link } from "react-router-dom";
export const SignUp = () => {
  const [name,setName]= useState("")
  const [password,setPassword]= useState("")
  const [confirmPassword,setConfirmPassword]= useState("")
  const [email,setEmail]= useState("")
  

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
      <div className=" p-10 w-[500px] rounded-lg bg-white shadow-custom ">
        <h1 className="text-5xl font-bold z-20 ">Getting Started</h1>
        <h3 className="text-sm my-2">
          Sign up now – it's quick, easy, and hassle-free!
        </h3>
        <form>
          <div className="flex items-center mt-9 mb-5 gap-2">
            <div>
              <button className="flex gap-1  items-center backgroundGradientButton button">
                <button className="p-2 bg-white rounded">
                  <FcGoogle />
                </button>
                Sign up with google
              </button>
            </div>
            <div>
              <button className="text-center rounded p-[0.65rem] text-blue-600 text-xl bg-[#f3f3f4] flex justify-center items-center">
                <BsTwitter />
              </button>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="flex flex-col items-start ">
              <label>Full Name</label>
              <input placeholder="full name" type="text" className="input"/>
            </div>
            <div className="flex flex-col items-start ">
              <label>Username</label>
              <input placeholder="username" type="text" className="input"/>
            </div>
          </div>
          <div className="flex flex-col items-start my-8 ">
            <label>Email</label>
            <input placeholder="hellome244@gmail.com" type="email" className="input"/>
          </div>
          <div className="flex flex-col items-start my-8">
            <label>Password</label>
            <input placeholder="password" type="password" className="input"/>
          </div>
          <div className="flex flex-col items-start">
            <label>Confirm Password</label>
            <input placeholder="confirm password" type="password" className="input"/>
          </div>
          <button className=" w-full backgroundGradientButton mt-6 px-3 py-2 rounded text-white text-xl ">
            Create Account
          </button>
          <p>Already have an account? <Link to="/login" className="text-[#e72eb6]">Login</Link></p>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};
