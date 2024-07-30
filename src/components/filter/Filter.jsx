import React from "react";
import arrow from "../../assets/Icon feather-arrow-left.svg";
import filter from "../../assets/Glyph.svg";
import MakeMyApartment from "../make-my-apartment/MakeMyApartment";

// import apar1 from "../../assets/luxury-place-resort.png";
// import apar2 from "../../assets/swimming-pool.png";
// import apar3 from "../../assets/169741.png";
// import apar4 from "../../assets/2150683421.png";

const Filter = () => {
  return (
    <div className="pt-10 flex flex-col gap-5">
      {/* header */}
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={arrow} alt="arrow" />
          <p className="text-[24.75px] font-bold font-IBMPlexArabic ">
            عنوان التصنيف أو الفلتر
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[#EF3F24] text-[15.75px] font-IBMPlexArabic font-bold">
            تصفية
          </p>
          <img src={filter} alt="filter" />
        </div>
      </div>

      {/* aparatments collections */}
      <div className="flex items-center">
        <div className="flex gap-4">
          <MakeMyApartment img="./luxury-place-resort.png" />
          <MakeMyApartment img="./swimming-pool.png" />
          <MakeMyApartment img=".//169741.png" />
          <MakeMyApartment img="./2150683421.png" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
