import React, { useState } from 'react';

const Customers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
    one:"I am extremely satisfied with the MERN stack development services provided by Spadasoft. The level of backend architecture and attention to detail displayed by their team was outstanding, surpassing excellence and exemplifying extraordinary expertise.",
    tow:"SpencerParikh",
    three:"Io Audio"
    },
    {
      one:"Our team had a wonderful experience with Spadasoft. The team presented numerous effective solutions and completed the task ahead of schedule. Communication was seamless through various channels, including chat, phone, and video.",
      tow:"Kris Corter",
      three:"Cortergroup"
      },
      {
        one:"Spadasoft consistently produced outstanding results across a variety of projects. Furthermore, we expanded our collaboration into web development, where the team's performance was excellent. We plan to engage with their services again.",
        tow:"Steven Malagon",
        three:"SolvewithTech"
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
    <div className='text-white mt-40'>
      <div className="text-center mt-20">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>What our happy customers are saying</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
      <div className='lg:flex md:flex relative justify-evenly mt-20'>
      <div className="lg:w-[35%] md:w-[50%] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((text, index) => (
          <div key={index} className="min-w-full p-4">
            <p className='text-2xl'>{text.one}</p>
            <p className='text-normal mt-5'>{text.tow}</p>
            <p className='text-sm text-white/80'>{text.three}</p>
          </div>
        ))}
      </div>
    </div>
      <div className='flex gap-5 absolute md:bottom-5 md:left-[180px] lg:left-[220px] lg:top-[300px] md:top-[320px] top-[350px] left-[150px]'>
      <button
        className="transform -translate-y-1/2 bg-gray-700 text-white py-2 px-4 rounded-full"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button
        className="transform -translate-y-1/2 bg-gray-700 text-white py-2 px-4 rounded-full"
        onClick={handleNext}
      >
        ❯
      </button>
      </div>
        <div>
            <img className='arrowimg lg:mt-0 md:mt-0 mt-40 p-5' src="https://spadasoft.com/wp-content/uploads/2023/05/Line-arrow-2-1.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Customers
