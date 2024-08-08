import React, { useState, useEffect } from 'react';
import pic from '../../assets/team.png'
import pic1 from '../../assets/team1.png'

const cards = [
  'Card 1',
  'Card 2',
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = cards.length;
  const intervalDuration = 3000; // Adjust the interval duration as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cardCount);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [cardCount]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
    <div className="text-center mt-20">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Read My Narrative</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
        <div className='lg:flex relative justify-center lg:w-[85%] text-white mx-auto mt-40 p-5'>
      <div className='lg:w-[50%] mx-auto'>
        <h5 className='text-xl font-semibold mb-20'>
            TEAM
        </h5>
        <h1 className='heroheading text-6xl lg:w-[80%]'>
        Meet the Spadasoft revenue revolutionaries
        </h1>
      </div>
      <div className="relative lg:w-[650px] w-[91%] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <div className="px-6 pt-6 flex justify-between">
            <div>
              <img className='slideimg w-[300px] ml-[-10px] bg-[#0d2205] pt-2 px-2 rounded-[15%]' src={pic} alt="" />
              <div className='my-5'>
              <h5 className='font-semibold text-xl'>NAME HERE</h5>
              <h6 className='text-sm mt-2 text-white/80'>ROLE HERE</h6>
              </div>
            </div>
            <div>
            <img className='slideimg w-[310px] ml-[-10px] bg-[#0d2205] pt-2 px-2 rounded-[15%]' src={pic1} alt="" />
            <div className='my-5'>
              <h5 className='font-semibold text-xl'>NAME HERE</h5>
              <h6 className='text-sm mt-2 text-white/80'>ROLE HERE</h6>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Team
