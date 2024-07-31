import React from "react";

const MakeMyApartment = ({ img }) => {
  return (
    <div className="w-3/4 xsm:w-[1/4]">
      <div>
        {/* Image */}
        <div className="relative">
          <img
            className="w-[100%] h-[100%]  rounded-[20px]"
            src={img}
            alt="apartment"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full p-2">
            <img src="./Icon ionic-ios-heart.svg" alt="heart" />
          </div>
        </div>
        {/* description */}
        <div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-[18px] text-black font-IBMPlexArabic font-bold">
              شاليهات هايسيندا
            </p>
            <p className="text-white bg-[#EF3F24] rounded-[6px] p-[5px]">8.7</p>
          </div>
          <p className="text-[#7E7E7E] text-[12px] font-medium font-IBMPlexArabic ">
            مرسى مطروح، مصر
          </p>
          <p className="text-[14px] text-black font-IBMPlexArabic font-bold">
            500.00 ريال
            <span className="text-[12px] text-[#7E7E7E] font-IBMPlexArabic font-bold">
              {" "}
              في الليلة{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeMyApartment;
