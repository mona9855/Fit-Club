import React, { useState } from "react";
import { testimonialsData }from '../data/testimonialsData';
import { leftArrow, RightArrow } from './';
import {motion} from 'framer-motion';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = {type: 'spring', duration: 3};

  return (
    <div className="flex gap-4 py-0 px-8 md:flex-col" id="testimonials">
      {/* Left side */}
      <div className="flex flex-1 flex-col uppercase text-white gap-8">
        <span className="text-orange font-bold">Testimonials</span>
        <span className="stroke-text font-bold text-5xl md:text-3xl">What they</span>
        <span className="font-bold text-5xl md:text-3xl">Say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x: -100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity:0, x: 100}}
        transition={transition}
        className="normal-case text-justify tracking-widest leading-10">
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange">
            {testimonialsData[selected].name}
          </span>{' '}
          - {testimonialsData[selected].status}
        </span>
      </div>

      {/* Right side */}
      <div className="flex flex-1 relative md:flex-col md:items-center md:justify-center md:gap-8">
        <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{...transition, duration: 2}}
        className="absolute w-64 h-80 border-2 border-orange border-solid bg-transparent right-36 top-3.5 md:relative md:hidden"></motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{...transition, duration: 2}}
        className="absolute w-64 h-75 top-16 right-28 bg-planCard md:relative md:hidden"></motion.div>
        <motion.img 
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x:0}}
        exit={{opacity:0, x: -100}}
        transition={transition}
        key={selected}
        src={testimonialsData[selected].image} alt="client" className="absolute w-64 h-80 object-cover right-32 top-8 md:relative md:top-0 md:right-0 md:self-center" />

        <div className="flex gap-4 absolute bottom-4 left-0 md:relative md:bottom-0 md:left-0">
          <img 
            onClick={() => (
              selected===0?setSelected(tLength-1):
              setSelected((prev) => prev -1)
              )}
          src={leftArrow} alt="left arrow" className="w-6 cursor-pointer"/>
          <img 
            onClick={() => (
              selected===tLength -1?setSelected(0): 
              setSelected((prev) => prev +1)
            )}
            src={RightArrow} alt="right arrow" className="w-6 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
