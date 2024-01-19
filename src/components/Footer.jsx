import React from "react";
import { Github, Instagram, LinkedIn, Logo } from "./";
import { ImHeart } from "react-icons/im";

const Footer = () => {
  return (
    <div className="relative">
      <hr className="border-1 border-lightgray" />
      <div className="flex flex-col py-4 px-8 justify-center items-center h-80 gap-16">
        <div className="flex gap-16">
          <img className="w-8 h-8 cursor-pointer" src={Github} alt="Github" />
          <img
            className="w-8 h-8 cursor-pointer"
            src={Instagram}
            alt="Instagram"
          />
          <img
            className="w-8 h-8 cursor-pointer"
            src={LinkedIn}
            alt="LinkedIn"
          />
        </div>
        <div>
          <img className="w-40" src={Logo} alt="Logo" />
        </div>

        <div className='flex flex-col text-white justify-center items-center text-sm font-bold font-manrope tracking-normal'>
          <p>© 2024 The Fit Club. All rights reserved.</p>
          <p className='mona'>Made with <ImHeart className="inline-block text-orangered text-xl"/> by <span className="text-orangered text-xl font-playpen">Mona.</span></p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
