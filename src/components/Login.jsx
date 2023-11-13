import { useState } from "react";
import { BiUser, BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import "../styles/login.css";
import {
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword);

  };

  return (
    <div className="bg-white flex flex-col h-[100vh] justify-center items-center text-center ">
      <div className=" p-6 md:p-12 rounded-lg bg-white shadow-custom ">
        <h1 className="text-5xl font-bold">Welcome!</h1>
        <h3 className="text-sm my-2">
          Log in to continue your journey with us.
        </h3>

        <form className="mt-5 md:w-96 w-80">
          <div className="flex mb-6 relative">
            <BiUser className="absolute text-xl top-4 ml-2" />
            <input
              type="text"
              className="py-3 px-10 w-full border rounded-xl outline-none bg-gray-50"
              placeholder="username"

            />
          </div>
          <div className="flex mb-6 relative">
            <AiOutlineLock className="absolute text-xl top-4 ml-2" />

            <input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              className="py-3 px-10 w-full border rounded-xl  bg-gray-50 outline-none"

            />
            <button onClick={handleShowPassword} className="flex text-xl  items-center absolute right-0 top-4 mr-5 ">
              {showPassword ? (
                <AiOutlineEye className=" text-blue-800" />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </button>
          </div>
          <button className="py-3 px-7 backgroundGradientButton text-lg text-white w-full border rounded-xl">
            Log In
          </button>
          <h4 className="my-4 text-lg">
            ..............Login with Others................
          </h4>
          <div className="flex items-center  mb-6 relative">
            <FcGoogle className="absolute text-2xl left-20 text-center top-4 ml-2" />
            <button className="py-3 px-9 w-full  border-[2px] text-lg border-[#e7e9ec] rounded-xl">
              Log in with{" "}
              <span className="text-blue-600 font-bold">Google</span>
            </button>
          </div>
          <div className="flex items-center mb-6 relative">
            <BiLogoFacebookCircle className="absolute text-blue-600 text-center left-[4.6rem] text-2xl top-4 ml-2" />
            <button className="py-3 px-9 w-full  border-[2px] border-[#e7e9ec] text-lg rounded-xl">
              Log in with{" "}
              <span className="text-blue-600 font-bold"> facebook</span>
            </button>
          </div>
          <p className="text-lg">Already have an account? <span className="text-pink-500">Sign up</span></p>
        </form>
      </div>
    </div>
  );
}
export default Login;
