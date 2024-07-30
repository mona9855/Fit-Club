import React, { useState } from "react";
import search from "../../assets/search.svg";

const DestinationSearch = () => {
  const [destination, setDestination] = useState("هايسيندا باي");
  return (
    <div className="pt-[80px]">
      <div>
        {/* Hello */}
        <div className="mb-[80px]">
          <h1 className="text-[#EF3F24]  text-[48px] font-IBMPlexArabic font-bold">
            أهلا
          </h1>
          <p className=" text-[28px] font-IBMPlexArabic font-bold">
            ما هي وجهتك القادمة؟
          </p>
        </div>

        <div className="flex  gap-6 bg-white rounded-[15px] shadow-lg pt-8 pb-12  px-12 relative">
          {/* First box */}
          <div className="flex flex-col gap-3 py-4 px-6 border-[2px] rounded-[15px] border-[#F0F0F0] w-[32%]">
            <p className="text-[12px] text-black  font-IBMPlexArabic font-medium">
              ابحث عن وجهة
            </p>
            <input
              className="text-[21.75px] color-black font-bold font-IBMPlexArabic "
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            ></input>
            <p className="text-[12px] color-black font-IBMPlexArabic font-medium">
              سيدي عبدالرحمن، مرسى مطروح، مصر
            </p>
          </div>

          {/* Second box */}
          <div className="flex  gap-5 py-4 px-6 border-[3px] rounded-[15px] border-[#F0F0F0] w-[32%]">
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-[12px] text-black font-IBMPlexArabic font-medium">
                تاريخ الدخول
              </p>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  className="text-[21.75px] text-black font-bold font-IBMPlexArabic w-[100px]"
                  defaultValue="22 ديسمبر"
                  placeholder="22 ديسمبر"
                />
                <img
                  src="./calendar.svg"
                  alt="date picker"
                  className="w-[12px] h-[12px]"
                />
              </div>
              <div className="flex gap-1">
                <p className="underline text-[12px] text-black font-IBMPlexArabic font-bold">
                  السابق
                </p>
                <p className=" text-[12px] text-black font-IBMPlexArabic font-medium">
                  التالي
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <p className="text-[12px] text-black font-IBMPlexArabic font-medium">
                تاريخ الخروج
              </p>
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  className="text-[21.75px] text-black font-bold font-IBMPlexArabic w-[100px]"
                  defaultValue="22 ديسمبر"
                  placeholder="22 ديسمبر"
                />
                <img
                  src="./calendar.svg"
                  alt="date picker"
                  className="w-[12px] h-[12px]"
                />
              </div>
              <div className="flex gap-1">
                <p className="underline text-[12px] text-black font-IBMPlexArabic font-bold">
                  السابق
                </p>
                <p className=" text-[12px] text-black font-IBMPlexArabic font-medium">
                  التالي
                </p>
              </div>
            </div>
          </div>
          {/* Third box */}
          <div className="flex flex-col gap-3 py-4 px-6 border-[3px] rounded-[15px] border-[#F0F0F0] w-[32%]">
            <p className="font-IBMPlexArabic font-medium text-[12px]">الضيوف</p>
            <p className="font-IBMPlexArabic font-bold text-[21.75px]">
              2 كبار , 2 أطفال
            </p>
            <p className="font-IBMPlexArabic font-medium text-[12px]">2 غرفة</p>
          </div>

          {/* Search */}
          <div className="absolute bottom-[-15px] left-[50%] z-10 bg-[#EF3F24] p-[12px] rounded-[100%]">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSearch;
