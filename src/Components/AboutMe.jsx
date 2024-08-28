import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className='mx-auto mt-40 lg:p-0 p-5 lg:flex justify-center gap-[120px] md:mx-10'>
      <div className="mb-20 lg:w-[35%]">
        <h4 className="text-[#36668b] text-[15px] font-bold">
          A B O U T &nbsp; U S
        </h4>
        <h1 className="heroheading text-4xl text-black mt-3">
        Who we are
        </h1>
        <h5 className="text-black text-[17px] my-5">
        Our journey in few words
        </h5>
        <h6 className='text-black text-[15px]'>
        We designed multiple web & mobile experiences for multi-cross-platform devices from TV to Ipads, etc. I’ve worked with small agencies and also with medium-sized companies. I previously worked with one of India’s largest Ed-Tech startups, Toppr which later got acquired by Byjus. Currently I'm designing aesthetic and functional solutions for smallcase within the invest team, to enhance financial accessibility and understanding for Indian users.
        </h6>
            <Link to="/about">
        <button className='border py-2 px-5 rounded-lg bg-[#36668b] text-white mt-5'>
        Know More &#8594;
        </button>
        </Link>
      </div>
      <div>
        <img className='rotate-[15deg] md:mt-20 border-[15px] lg:w-[100%] w-[70%] mx-auto' src="https://framerusercontent.com/images/fpM2zJPCmYCK9XyV9EgI2lz0oYk.png" alt="" />
      </div>
    </div>
  )
}

export default AboutMe
