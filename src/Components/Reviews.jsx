import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
    one:"Syed is one of the best, hard-working, passionate, and respectful people you can work with on Fiverr. His work was exceptional, providing amazing work on a platform he was somewhat unfamiliar with which utilised the Chrome CEF. Second, the work was done blazing fast which was unexpected for the amount of work. Third, his prices beat almost everyone on the market, and for the quality of worked I wouldnt have been surprised if he charged much more. Fourth and final point, Syed’s timelines was unbeatable. He wanted to have meeting every day to discuss his progress and so that he could do revisions as we go, which even I couldnt keep up with. If you need react development, go with Syed!",
    tow:"abdu_sizz",
    three:"EG Egypt"
    },
    {
      one:"Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
      tow:"huzaifax1",
      three:"CA Canada"
      },
      {
        one:"Syed is very cooperative and well-behaved, demonstrating great dedication to the project. He delivered exceptional, high-quality work,",
        tow:"t11ger",
        three:"GB United Kingdom"
        },
        {
          one:"Delivered as per the discussion and recommendations. Absolutely recommended",
          tow:"huzaifax1",
          three:"CA Canada"
          },
          {
            one:"Excellent work, just as I expected. His dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
            tow:"saadmehmood09",
            three:"PK Pakistan"
            },
  ];
  const slidesname = [
    "SpencerParikh",
    "Kris Corter",
    "Steven Malagon"
  ];
  const slidescompany = [
    "Io Audio",
    "Cortergroup",
    "SolvewithTech"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div>
    <div className="text-center mb-20 mt-20">
        <h4 className="text-[#ADDAB2] text-[12px]">
          S O M E &nbsp; D O U B T S
        </h4>
        <h1 className="heroheading text-4xl text-white mt-3">
          Frequently Asked Questions
        </h1>
        <h5 className="text-white text-[17px]">
          Your answers await right here
        </h5>
      </div>
      <div className='lg:flex justify-center lg:gap-20 p-5'>
        <div className='lg:block flex justify-center'>
        <div className='border border-[yellow]/30 p-5 w-[160px] rounded-full'>
            <h2 className='border border-[green] border-2 p-14 rounded-[60%] text-4xl text-center font-bold relative'><h2 className='absolute left-5 top-5 text-white/60'>300+</h2><i class="fa fa-arrow-up text-[green] text-[20px] bottom-5 left-[50px] absolute"></i></h2>
        </div>
        <h2 className='mt-5 text-center lg:flex hidden justify-center text-white/80'>Completed Projects</h2>
        </div>
        <h2 className='mt-5 text-center lg:hidden text-white/80'>Completed Projects</h2>
        <div className='lg:block flex justify-center'>
        <div className='border border-[yellow]/30 p-5 my-5 lg:my-0 w-[160px] rounded-full'>
            <h2 className='border border-[green] border-2 p-14 rounded-[60%] text-4xl text-center font-bold relative'><h2 className='absolute left-9 top-5 text-white/60'>50</h2><i class="fa fa-arrow-up text-[green] text-[20px] bottom-5 left-[50px] absolute"></i></h2>
        </div>
        <h2 className='mt-5 text-center lg:flex hidden justify-center text-white/80'>Awards Won</h2>
        </div>
        <h2 className='mt-5 text-center lg:hidden text-white/80'>Awards Won</h2>
        <div className='lg:block flex justify-center'>
        <div className='border border-[yellow]/30 p-5 w-[160px] my-5 lg:my-0 rounded-full'>
            <h2 className='border border-[green] border-2 p-14 lg:my-0 rounded-[60%] text-4xl text-center font-bold relative'><h2 className='absolute left-8 top-5 text-white/60'>81+</h2><i class="fa fa-arrow-up text-[green] text-[20px] bottom-5 left-[50px] absolute"></i></h2>
        </div>
        <h2 className='mt-5 text-center lg:flex hidden justify-center text-white/80'>Skilled Professionals</h2>
        </div>
        <h2 className='mt-5 text-center lg:hidden text-white/80'>Skilled Professionals</h2>
        <div className='py-5 mt-5 lg:mt-0 px-16 rounded-[40px] bg-[green] text-center'>
            <h2 className='text-4xl font-bold mb-2'>200+</h2>
            <h5>Satisfied Clients</h5>
            <button className='my-5 py-4 px-14 bg-black rounded-full text-white'>Contact Now</button>
        </div>
      </div>
      <div>
      <div className='lg:flex md:flex relative justify-evenly mt-20 bg-[black]/30 lg:w-[80%] w-[95%] mx-auto lg:py-20 py-10 px-5 rounded-[40px] text-white'>
      <div className="lg:w-[35%] md:w-[50%] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((text, index) => (
          <div key={index} className="min-w-full p-4">
            <p className='text-2xl'>{text.one.slice(0, 290)}</p>
            <p className='text-normal mt-5'>{text.tow}</p>
            <p className='text-sm text-white/80'>{text.three}</p>
          </div>
        ))}
      </div>
    </div>
      <div className='flex gap-5 absolute md:bottom-5 md:left-[180px] lg:left-[150px] lg:top-[500px] md:top-[440px] top-[400px] left-[150px]'>
      <Link
        className="transform -translate-y-1/2 text-[green] font-bold text-2xl py-2 px-4 rounded-full"
        onClick={handlePrev}
      >
        ❮
      </Link>
      <Link
        className="transform -translate-y-1/2 text-[green] font-bold text-2xl py-2 px-4 rounded-full"
        onClick={handleNext}
      >
        ❯
      </Link>
      </div>
        <div>
            <img className='arrowimg lg:mt-0 md:mt-0 mt-10 p-5' src="https://spadasoft.com/wp-content/uploads/2023/05/Line-arrow-2-1.svg" alt="" />
            <div>
        <span class="fa fa-star checked text-[orange] ml-1"></span>
        <span class="fa fa-star checked text-[orange] ml-1"></span>
        <span class="fa fa-star checked text-[orange] ml-1"></span>
        <span class="fa fa-star text-[orange] ml-1"></span>
        <span class="fa fa-star text-[orange] ml-1"></span>
        <h2>5000+ Client Reviews</h2>
        </div>
        <Link className='absolute right-5 lg:bottom-20 bottom-10'>
            View All Reviews <i class="fa fa-arrow-right"></i>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Reviews
