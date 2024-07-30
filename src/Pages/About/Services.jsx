import React from 'react'

const Services = () => {
  return (
    <div className=''>
    <div className="text-center mt-20">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Read My Narrative</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
      <div className='lg:flex justify-evenly text-white lg:mt-40 mt-20 p-5'>
      <div>
        <h5 className='text-normal'>
        MARKETING SOLUTIONS PROVIDER
        </h5>
        <h2 className='lg:text-5xl text-4xl heroheading mt-5'>
        We’re a leader in digital <br /> marketing solutions
        </h2>
      </div>
      <div className='lg:w-[30%] text-xl lg:mt-0 mt-10'>
        <h5>
        After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.
        </h5>
      </div>
    </div>
    <div className='mx-auto lg:w-[75%] mt-40 text-white'>
      <h5 className='font-semibold mb-10'>OUR CLIENTS</h5>
      <div className='flex justify-between lg:gap-[120px] bg-[green] py-5 relative'>
        <img className='shadowpic w-[70px]' src="https://spadasoft.com/wp-content/uploads/2023/10/Ads.svg" alt="" />
        <img className='shadowpic w-[70px]' src="https://spadasoft.com/wp-content/uploads/2023/10/iecl.svg" alt="" />
        <img className='shadowpic w-[70px]' src="https://spadasoft.com/wp-content/uploads/2023/05/gewch.svg" alt="" />
        <img className='shadowpic w-[70px]' src="https://spadasoft.com/wp-content/uploads/2023/05/make-the-dot-1.svg" alt="" />
        <img className='shadowpic w-[70px]' src="https://spadasoft.com/wp-content/uploads/2023/10/Solaire.svg" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Services
