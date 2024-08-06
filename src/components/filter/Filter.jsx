import React, { useEffect, useState } from "react";
import arrow from "../../assets/Icon feather-arrow-left.svg";
import filter from "../../assets/Glyph.svg";
import MakeMyApartment from "../make-my-apartment/MakeMyApartment";

const Filter = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    try {
      await fetch("https://wovenclouds.com/arrovia/api/search/random", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((response) => response.json())
        .then((data) => setAllData(data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(allData);

  return (
    <div className="pt-10 flex flex-col gap-5 p-2">
      {/* header */}
      <div className="flex gap-1 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={arrow} alt="arrow" />
          <p className="text-[18px] xsm:text-[24.75px] font-bold font-IBMPlexArabic ">
            عنوان التصنيف أو الفلتر
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[#EF3F24] text-[13px] xsm:text-[15.75px] font-IBMPlexArabic font-bold">
            تصفية
          </p>
          <img src={filter} alt="filter" />
        </div>
      </div>

      {/* aparatments collections */}
      <div className=" ">
        <div className="flex xsm:flex-row flex-col items-center flex-wrap justify-center gap-3 ">
          {allData?.length > 0 ? (
            <>
              {allData?.map((item, index) => {
                return <MakeMyApartment key={index} item={item} />;
              })}
            </>
          ) : (
            <p className="text-green-500 font-medium text-[14px] font-IBMPlexArabic m-10">
              برجاء الانتظار ... جاري تحميل العقارات ⏳
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
