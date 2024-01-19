import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_539x90w",
        "template_5o1uso8",
        form.current,
        "Wj9TVGRmMbsg17bYu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target[0].value = '';
  };

  return (
    <div className="flex gap-40 py-0 px-8 md:flex-col md:gap-8" id="join-us">
      {/* Left section */}
      <div className=" text-white text-5xl font-bold uppercase relative md:text-3xl">
        <hr className="rounded absolute w-40 border-2 border-solid border-orange" />
        <div className="mt-4 flex gap-4">
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div className="flex gap-4">
          <span>Your body</span>
          <span className="stroke-text">With us</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex justify-center items-end">
        <form ref={form} onSubmit={sendEmail} 
        className="flex gap-8 bg-gray py-6 px-9">
          <input
            className="bg-transparent border-none outline-none text-lightgray placeholder-lightgray md:text-xs placeholder:px-4"
            type="email"
            name="user_email"
            placeholder="Enter your email address here"
          />
          <button className="btn bg-orange text-white">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
