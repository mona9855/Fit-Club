import React from "react";
import { image1, image2, image3, image4, tick, nb, adidas, nike } from "./";

const Reasons = () => {
  return (
    <div className="py-0 px-8 flex gap-8 md:flex-col" id="reasons">
      {/* Left side  */}
      <div className="flex-1 grid grid-cols-3 auto-rows-fr gap-4 md:auto-rows-auto md:overflow-hidden">
        <div className="row-span-2">
          <img
            src={image1}
            className="object-cover w-full max-h-full"
            alt="athletic person 1"
          />
        </div>
        <div className="col-span-2">
          <img
            src={image2}
            className="object-cover w-full min-h-full"
            alt="athletic person 2"
          />
        </div>
        <div>
          <img
            src={image3}
            className="object-cover w-full min-h-full"
            alt="athletic person 3"
          />
        </div>
        <div>
          <img
            src={image4}
            className="object-cover w-full min-h-full"
            alt="athletic person 4"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 flex-col uppercase gap-4">
        <span className="text-orange font-bold">Some Reasons</span>

        <div className="text-white text-5xl font-bold md:text-4xl">
          <span className="stroke-text">Why </span>
          <span>Choose Us?</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex text-base gap-4">
            <img src={tick} alt="tick mark" className="w-8 h-8"></img>
            <span className="uppercase text-white">
              over 140+ expert coaches
            </span>
          </div>
          <div className="flex text-base gap-4">
            <img src={tick} alt="tick mark" className="w-8 h-8" />
            <span className="uppercase text-white">
              train smarter and faster than before
            </span>
          </div>
          <div className="flex text-base gap-4">
            <img src={tick} alt="tick mark" className="w-8 h-8" />
            <span className="uppercase text-white">
              1 free program for new member
            </span>
          </div>
          <div className="flex text-base gap-4">
            <img src={tick} alt="tick mark" className="w-8 h-8" />
            <span className="uppercase text-white">reliable partners</span>
          </div>

          <span className="uppercase text-gray font-normal">Our Partners</span>

          <div className="flex gap-4">
            <img className="w-10" src={nb} alt="nb" />
            <img className="w-10" src={adidas} alt="adidas" />
            <img className="w-10" src={nike} alt="nike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
