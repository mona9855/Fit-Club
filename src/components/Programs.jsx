import React from 'react';
import { programsData } from '../data/programsData';
import { RightArrow } from '.';

const Programs = () => {
  return (
    <div id='programs' className='flex flex-col gap-8 py-0 px-8'>
        {/* Header */}
        <div className='flex gap-20 font-bold text-5xl justify-center text-white uppercase italic md:flex-col md:gap-4 md:text-2xl  md:justify-center md:items-center md:mt-8'>
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* Program Categories */}
        <div className='flex gap-4 md:flex-col'>
          {programsData.map((program) => (
            <div className='program hover:cursor-pointer hover:bg-planCard flex flex-col bg-gray p-8 gap-4 text-white justify-between' key={program.heading}>
              {program.image}
              <span className='text-base font-bold'>{program.heading}</span>
              <span className='text-sm'>{program.details}</span>
              <div className='flex items-center gap-8'>
                <span>Join Now</span>
                <img className='w-4' src={RightArrow} alt="right arrow" />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs;