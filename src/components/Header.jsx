import React, { useState } from "react";
import { Logo } from "./";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";



const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <div>
        <p className="text-white font-bold text-base my-0 mx-4 cursor-pointer uppercase md:text-sm" onClick={() => {
              setToggleMenu(false);
            }}>
          <a href="#home">Home</a>
        </p>
        <p className="text-white font-bold text-base my-0 mx-4 cursor-pointer uppercase md:text-sm" onClick={() => {
              setToggleMenu(false);
            }}>
          <a href="#programs">Programs</a>
        </p>
        <p className="text-white font-bold text-base my-0 mx-4 cursor-pointer uppercase md:text-sm" onClick={() => {
              setToggleMenu(false);
            }}>
          <a href="#reasons">Why us</a>
        </p>
        <p className="text-white font-bold text-base my-0 mx-4 cursor-pointer uppercase md:text-sm" onClick={() => {
              setToggleMenu(false);
            }}>
          <a href="#plans">Plans</a>
        </p>
        <p className="text-white font-bold text-base my-0 mx-4 cursor-pointer uppercase md:text-sm" onClick={() => {
              setToggleMenu(false);
            }}>
          <a href="#testimonials">Testimonials</a>
        </p>
      </div>
    );
  };

  return (
    <div className="[&:nth-child(2)]:md:fixed [&:nth-child(2)]:md:z-50 [&:nth-child(2)]:md:right-8 flex justify-between">
      <img src={Logo} alt="Logo" class="w-40 h-12" />
      <div className="lg:hidden flex">
        <Menu />
      </div>

      <div className="menu hidden lg:flex relative">
        {toggleMenu ? (
          <RiCloseLine
            className='cursor-pointer'
            color="#FFF"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            className="cursor-pointer"
            color="#FFF"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}

        {toggleMenu && (
          <div className=" justify-end items-end flex-col bg-appColor absolute text-end p-8 right-0 top-10 mt-4 min-w-52 rounded scale-up-center z-100">
            <div className="gpt3__navbar--menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
