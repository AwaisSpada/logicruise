import React, { useState, useEffect } from 'react';
import pic from '../../assets/team.png';
import pic1 from '../../assets/team1.png';

const cards = [
  { name: 'John Doe', role: 'Developer', image: pic },
  { name: 'Jane Smith', role: 'Designer', image: pic1 },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = cards.length;
  const intervalDuration = 3000; // Interval duration in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cardCount);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [cardCount]);

  return (
    <div className='bg-gray-900 py-16 my-20'>
      <div className="text-center px-4 mb-12">
        <h4 className="text-blue-500 font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-2">
          T H O U G H T S &nbsp; A N D &nbsp; B L O G S
        </h4>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4'>
          Meet Our Team
        </h1>
        <h5 className='text-gray-400 text-sm sm:text-base md:text-lg'>
          Pages filled with design wisdom, imagination, and much more
        </h5>
      </div>
      
      <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full px-4 lg:px-8 py-6 flex justify-center">
              <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                <img className='w-[300px] h-[300px] object-contain rounded-full mb-4 border-4 border-blue-500' src={card.image} alt={card.name} />
                <div className='text-center'>
                  <h5 className='font-semibold text-white text-xl mb-2'>{card.name}</h5>
                  <h6 className='text-sm text-blue-500'>{card.role}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentIndex((currentIndex - 1 + cardCount) % cardCount)} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600">
          &lt;
        </button>
        <button 
          onClick={() => setCurrentIndex((currentIndex + 1) % cardCount)} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Team;
