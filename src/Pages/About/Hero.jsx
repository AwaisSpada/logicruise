import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-contain bg-center bg-no-repeat px-5'>
    <div className="logodiv text-center lg:mt-[150px] mt-10">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Read My Narrative</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
      <div className='mx-auto lg:mt-40 mt-20 lg:flex justify-center gap-[120px] md:mx-10' id='about'>
    <div className="mb-20 lg:w-[35%]">
      <h6 className='text-white lg:text-[40px] text-[25px] font-normal'>
      At Our Company, we deliver bespoke IT solutions that help us build partnerships with businesses around the globe
      </h6>
    </div>
    <div className='lg:w-[35%]'>
      <img className='rounded-3xl' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/28/14/employee-first-day-stock.jpg" alt="" />
    </div>
  </div>
    </div>
  )
}

export default Hero
