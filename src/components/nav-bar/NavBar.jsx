import React from "react";
import logo from "../../assets/Layer 1.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* left side */}
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* Right side */}
      <div className="flex gap-4 items-center">
        {/* Add your property */}
        <div className="flex gap-2 bg-[#78BAC6] border-[1px] rounded-[32px] border-[#78BAC6] py-2 px-4">
          <img src="./home.svg" alt="user" />
          <p className="text-white font-IBMPlexArabic font-bold">اضف عقارك</p>
        </div>
        {/* User */}
        <div className="flex items-center gap-2">
          <div className="rounded-full p-1 border-[2px] border-[#FF0000]">
            <img src="./user.svg" alt="user" />
          </div>
          <p className="text-[#FF0000] font-IBMPlexArabic font-bold">
            يزيد العمري
          </p>
        </div>

        {/* Language */}
        <div>
          <select
            className="text-[#FF0000] font-[600]"
            name="language-picker-select pr-0"
            id="language-picker-select"
          >
            <option lang="ar" value="Arabic">
              AR
            </option>
            <option lang="en" value="english" selected>
              EN
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
