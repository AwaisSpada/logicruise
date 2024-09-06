import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import lineArrow from '../assets/lineArrow.svg'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      one: "Syed is one of the best, hard-working, passionate, and respectful people you can work with on Fiverr. His work was exceptional, providing amazing work on a platform he was somewhat unfamiliar with which utilised the Chrome CEF. Second, the work was done blazing fast which was unexpected for the amount of work. Third, his prices beat almost everyone on the market, and for the quality of work I wouldn’t have been surprised if he charged much more. Fourth and final point, Syed’s timelines were unbeatable. He wanted to have meetings every day to discuss his progress and so that he could do revisions as we go, which even I couldn’t keep up with. If you need React development, go with Syed!",
      tow: "abdu_sizz",
      three: "EG Egypt"
    },
    {
      one: "Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to work with. Definitely recommended",
      tow: "huzaifax1",
      three: "CA Canada"
    },
    {
      one: "Syed is very cooperative and well-behaved, demonstrating great dedication to the project. He delivered exceptional, high-quality work.",
      tow: "t11ger",
      three: "GB United Kingdom"
    },
    {
      one: "Delivered as per the discussion and recommendations. Absolutely recommended",
      tow: "huzaifax1",
      three: "CA Canada"
    },
    {
      one: "Excellent work, just as I expected. His dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
      tow: "saadmehmood09",
      three: "PK Pakistan"
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Element name="RATINGS">
      <div className="bg-white text-gray-700">
      <div className="text-center mb-10 mt-20">
        <h4 className="text-gray-500 text-sm font-bold">
          R E V I E W S
        </h4>
        <h1 className="text-4xl font-bold mt-1">
        What Our Clients Say About Us
        </h1>
      </div>
      
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-10 md:gap-10 lg:gap-20 p-5 w-full mx-auto">
  <div className='flex flex-col items-center md:flex-row md:justify-center gap-10 md:gap-10 lg:gap-20 lg:ml-2'>
  <div className="flex flex-col items-center">
    <div className="border border-gray-700 p-5 w-40 rounded-full mx-auto">
      <h2 className="border border-gray-300 p-14 rounded-full text-4xl text-center font-bold relative">
        <span className="absolute left-5 top-5">300+</span>
        <i className="fa fa-arrow-up text-gray-500 text-2xl bottom-5 left-[50px] absolute"></i>
      </h2>
    </div>
    <h2 className="mt-5 text-center text-gray-700">Completed Projects</h2>
  </div>

  <div className="flex flex-col items-center">
    <div className="border border-gray-700 p-5 my-5 md:my-0 w-40 rounded-full mx-auto">
      <h2 className="border border-gray-300 p-14 rounded-full text-4xl text-center font-bold relative">
        <span className="absolute left-9 top-5">50</span>
        <i className="fa fa-arrow-up text-green-500 text-2xl bottom-5 left-[50px] absolute"></i>
      </h2>
    </div>
    <h2 className="mt-5 text-center text-gray-700">Awards Won</h2>
  </div>

  <div className="flex flex-col items-center">
    <div className="border border-gray-700 p-5 w-40 my-5 md:my-0 rounded-full mx-auto">
      <h2 className="border border-gray-300 p-14 rounded-full text-4xl text-center font-bold relative">
        <span className="absolute left-8 top-5">81+</span>
        <i className="fa fa-arrow-up text-gray-500 text-2xl bottom-5 left-[50px] absolute"></i>
      </h2>
    </div>
    <h2 className="mt-5 text-center text-gray-700">Skilled Professionals</h2>
  </div>

  <div className="py-5 mt-5 w-[300px] lg:ml-0 md:mx-auto lg:mt-0 rounded-2xl bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-2 text-gray-700">200+</h2>
    <h5 className="text-gray-600">Satisfied Clients</h5>
    <Link to='contact' smooth={true} duration={1500}>
      <button className="my-5 py-1 px-10 bg-gray-700 text-white rounded-full">Contact Now</button>
    </Link>
  </div>
  </div>
</div>


      <div className="relative lg:w-4/5 w-11/12 mx-auto bg-gray-100 py-10 px-5 rounded-2xl mt-20">
        <div className="lg:w-1/2 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((text, index) => (
              <div key={index} className="min-w-full p-4">
                <p className="text-xl text-gray-700">{text.one.slice(0, 290)}</p>
                <p className="text-lg mt-5 text-gray-700">{text.tow}</p>
                <p className="text-sm text-gray-600 font-bold">{text.three}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute lg:bottom-5 bottom-0 left-1/2 transform -translate-x-1/2 flex gap-5">
          <Link
            className="cursor-pointer text-gray-700 text-2xl py-2 px-4 rounded-full"
            onClick={handlePrev}
          >
            ❮
          </Link>
          <Link
            className="cursor-pointer text-gray-700 text-2xl py-2 px-4 rounded-full"
            onClick={handleNext}
          >
            ❯
          </Link>
        </div>
        <div className="text-center mt-10">
          <img className="mx-auto mb-5" src={lineArrow} alt="Arrow" />
          <div className='absolute left-5 lg:bottom-10 bottom-20'>
            <span className="fa fa-star checked text-orange-400 ml-1"></span>
            <span className="fa fa-star checked text-orange-400 ml-1"></span>
            <span className="fa fa-star checked text-orange-400 ml-1"></span>
            <span className="fa fa-star text-orange-400 ml-1"></span>
            <span className="fa fa-star text-orange-400 ml-1"></span>
            <h2 className="text-lg text-gray-700">5000+ Client Reviews</h2>
          </div>
          <Link className="text-gray-700 absolute right-5 bottom-10">
            View All Reviews <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Reviews;
