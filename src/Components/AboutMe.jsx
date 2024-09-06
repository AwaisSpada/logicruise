import React from 'react';
import { Link } from 'react-router-dom';
import {Element} from 'react-scroll'

const AboutMe = () => {
  return (
    <Element name="ABOUT">
    <div className='flex flex-col mt-10 lg:flex-row items-center lg:justify-center gap-10 lg:gap-20 px-5 lg:px-20 py-10 lg:py-20 bg-gray-700'>
      <div className='flex-1 max-w-lg'>
        <h4 className='text-white text-sm font-semibold uppercase'>
          About Us
        </h4>
        <h1 className='text-3xl lg:text-4xl font-bold text-white mt-2'>
          Who We Are
        </h1>
        <h5 className='text-lg text-gray-300 my-4'>
          Our Journey in a Few Words
        </h5>
        <p className='text-gray-200 text-base'>
          We design innovative web and mobile experiences across multiple platforms, from TVs to iPads. Our experience spans small agencies to medium-sized companies, including a significant stint with Toppr, India’s major Ed-Tech startup acquired by Byjus. Currently, we craft aesthetic and functional solutions for smallcase, enhancing financial accessibility and understanding for Indian users.
        </p>
        <Link to="/about">
          <button className='mt-5 px-6 py-3 flex items-center gap-2 border text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out [&>i]:transition [&>i]:duration-300 [&>i]:ease-in-out [&>i]:hover:rotate-[-60deg]'>
            Learn More <i className='fa fa-arrow-right mt-1'></i>
          </button>
        </Link>
      </div>
      <div className='flex-1 max-w-lg'>
        <img className='w-full rounded-lg shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 ease-in-out' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/28/14/employee-first-day-stock.jpg" alt="About Us" />
      </div>
    </div>
    </Element>
  );
};

export default AboutMe;
