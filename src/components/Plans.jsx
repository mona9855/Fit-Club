import React from "react";
import { plansData } from '../data/plansData';
import { whiteTick } from './';

const Plans = () => {
  return (
    <div className="py-0 px-8" id="plans">
      <div className='blur w-96 h-120 left-0'></div>
      <div className='blur w-96 h-120 right-0'></div>
      <div className='flex gap-8 font-bold text-4xl justify-center text-white uppercase italic md:flex-col md:text-center'>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      {/* Plans Card */}
      <div className="plans flex items-center justify-center gap-12 p-10 md:flex-col">
        {
            plansData.map((plan, i) => (
                <div key={i} className="plan flex flex-col text-white bg-caloryCard gap-8 p-6 w-60 [&:nth-child(2)]:bg-planCard [&:nth-child(2)]:scale-110 [&:nth-child(2)]:md:scale-100">
                    {plan.icon}
                    <span className="font-bold text-base">{plan.name}</span>
                    <span className="font-bold text-5xl">$ {plan.price}</span>
 
                    <div className="flex flex-col gap-4">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <img className="w-4" src={whiteTick} alt="white tick"/>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="text-sm">See more benefits </span>
                    </div>
                    <button type="button" className="btn text-black bg-white">Join Now</button>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default Plans;
