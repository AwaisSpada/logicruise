import React from 'react';
import { Element } from 'react-scroll';

const Hero = () => {
  return (
    <Element name='about'>
      <div className='hero relative w-full lg:h-screen bg-cover bg-center'>
        <div className="text-center">
          <h4 className="text-[#36668b] font-semibold text-sm sm:text-base lg:text-lg mb-2">
            T H O U G H T S &nbsp; A N D &nbsp; B L O G S
          </h4>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4'>
            Read My Narrative
          </h1>
          <h5 className='text-white text-sm sm:text-base lg:text-lg'>
            Pages filled with design wisdom, imagination, and much more
          </h5>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-16 mt-12 lg:mt-20'>
          <div className="lg:w-1/2 px-4">
            <h6 className='text-blue-500 font-bold text-base sm:text-lg lg:text-3xl leading-relaxed'>
              At Our Company, we deliver bespoke IT solutions that help us build partnerships with businesses around the globe.
            </h6>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img
              className='w-full h-auto rounded-3xl shadow-lg'
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/28/14/employee-first-day-stock.jpg"
              alt="Employee's first day at work"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
