import React from "react";
import Header from "./Header";
import { Hero_image, Hero_image_back, Calories, Heart } from "./";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true : false;

  return (
    <div className="flex flex-row md:flex-col justify-between" id="home">
      <div className="blur w-96 md:w-60 h-120 left-0"></div>
      {/* Left side section */}
      <div className="p-8 pt-6 flex-3 flex gap-8 flex-col">
        <Header />

        {/* Hero */}
        <div className="mt-16 rounded-4 bg-bestClub  w-fit py-5 px-3.5 uppercase text-white flex justify-center items-start relative">
          <motion.div
            initial={{ left: mobile? '165px' : '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
            className="absolute bg-orange w-24 h-4/5 left-2 rounded-3 z-10 bottom-2"
          />
          <span className="z-20 md:mt-0 md:text-base md:text-center md:scale-75">The best fitness club in the town</span>
        </div>

        <div className="flex flex-col gap-6 uppercase text-7xl font-bold text-white overflow-inherit md:text-4xl md:items-center md:justify-center">
          <div>
            <span className="stroke-text font-sans">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="w-4/5 font-light normal-case tracking-widest text-base md:text-sm md:font-extralight md:text-center md:tracking-wider">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-white text-4xl md:text-2xl">
              <NumberCounter end={140} start={100} delay={4} preFix='+'/>
            </span>
            <span className="text-gray uppercase text-sm">Expert Coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-4xl md:text-2xl">
              <NumberCounter end={978} start={800} delay={4} preFix='+'/>
            </span>
            <span className="text-gray uppercase text-sm">Members Joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-4xl md:text-2xl">
              <NumberCounter end={50} start={0} delay={4} preFix='+'/>
            </span>
            <span className="text-gray uppercase text-sm">Fitness Programs</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="flex gap-4 font-normal md:justify-center">
          <button
            type="button"
            className="btn text-white bg-orange  border-4  border-transparent"
          >
            Get Started
          </button>
          <button
            type="button"
            className="btn text-white bg-transparent  border-2  border-orange"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right side section */}
      <div className="flex-1 relative bg-orange md:bg-inherit">
        <button className="btn absolute border-2 bg-white border-black right-12 top-8 text-black">
          Join Now
        </button>

        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="flex flex-col gap-4 bg-darkGrey w-fit p-4 items-start border-5 absolute right-16 top-28 md:left-4 md:top-8"
        >
          <img src={Heart} alt="Heart" className="w-8" />
          <span className="text-gray md:text-sm">Heart Rate</span>
          <span className="text-white text-2xl md:text-sm">116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img
          src={Hero_image}
          alt="hero"
          className="absolute top-40 right-40 w-96 md:relative md:w-60 md:left-28 md:top-16 md:self-center"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt="hero back"
          className="absolute top-16 right-80 -z-10 w-60 md:left-8 md:top-0"
        />

        {/* Calories */}
        <motion.div
          transition={transition}
          initial={{ right: "28rem" }}
          whileInView={{ right: "18rem" }}
          className="flex gap-8 bg-caloryCard border-5 p-4 w-4/5 absolute top-135 right-72 md:relative md:top-20 md:left-8"
        >
          <img src={Calories} alt="calories" className="w-12 md:w-8" />
          <div className="flex flex-col justify-between">
            <span className="text-gray">Calories Burned</span>
            <span className="text-white text-2xl md:text-base">220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
