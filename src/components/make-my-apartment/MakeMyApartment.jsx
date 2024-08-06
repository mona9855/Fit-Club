import React from "react";

const MakeMyApartment = ({ item }) => {
  return (
    <div>
      <div>
        {/* Image */}
        <div className="relative w-[177px] h-[160px]">
          <img
            className="w-[100%] h-[100%]  rounded-[20px]"
            src={item?.mainImage}
            alt="apartment"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full p-2">
            <img src="./Icon ionic-ios-heart.svg" alt="heart" />
          </div>
        </div>
        {/* description */}
        <div className="w-[177px]">
          <div className="flex items-center justify-between mt-5 px-1 ">
            <p className="text-[18px] text-black font-IBMPlexArabic font-bold">
              {item?.nameAr}
            </p>
            <p className="text-white bg-[#EF3F24] rounded-[6px] px-[8px] py-[4px]">
              {item?.hotelStars ? item?.hotelStars : 0}
            </p>
          </div>
          <p className="text-[#7E7E7E] text-[12px] font-medium font-IBMPlexArabic ">
            {item?.website}
          </p>
          <p className="text-[14px] text-black font-IBMPlexArabic font-bold">
            {item?.price} ريال
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
