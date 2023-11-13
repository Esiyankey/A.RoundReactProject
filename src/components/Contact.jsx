import React from "react";

 function Contact() {
  return (
    <div className="flex justify-center flex-col my-28 items-center">
      <h1 className="md:text-6xl text-4xl mt-9 font-extrabold text-center text-white">
        Contact Us
      </h1>
      <h3 className="md:text-2xl text-lg text-center py-6 text-[#ced8e3] ">
        We're here for you: Connect with us for any questions or concerns.
      </h3>
      <div className=" mt-15 lg:px-36  pt-5 rounded-lg border-[#464c6a] border lg:w-[900px] md:w-[700px] w-[350px] px-5 md:px-10 items-center">
        <h3 className=" text-base lg:text-xl md:text-lg  py-6 text-[#ced8e3] ">
          {" "}
          We're here to assist you! Feel free to reach out with any questions,
          comments, or inquiries.
        </h3>

        <div className="py-5">
          <form>
            <label className="text-xl text-[#ced8e3]">Your email</label>
            <input className="block w-full py-3 border-[#464c6a] px-8 bg-transparent text-white cursor-pointer rounded caret-white border mb-5" />
            <label className="text-xl  text-[#ced8e3]">Your message</label>
            <textarea
              className="bg-transparent border border-[#464c6a]  cursor-pointer w-full caret-white text-white rounded"
              id="myTextarea"
              rows={10}
              // cols={67}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;