import React from 'react';

const Values = () => {
  return (
    <div className='bg-gray-700 py-16 px-6 sm:px-8 lg:px-12'>
      <div className="text-center mb-12 lg:mb-20">
        <h4 className="text-[#e8fce8] font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-2">O V E R &nbsp; V A L U E S</h4>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight'>
          Our Core Values
        </h1>
        <h5 className='text-gray-300 text-sm sm:text-base md:text-lg'>
          Pages filled with design wisdom, imagination, and much more
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="bg-[#36668b] text-white rounded-3xl p-6 lg:p-8 shadow-xl hover:bg-[#2b4a73] transition-transform transform hover:scale-105">
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>Integrity</h2>
          <p className='text-base sm:text-lg mb-4'>
            We maintain credibility and trust within our office culture, clients, and stakeholders.
          </p>
          <h5 className='text-4xl font-bold'>&#8594;</h5>
        </div>
        <div className="bg-[#36668b] text-white rounded-3xl p-6 lg:p-8 shadow-xl hover:bg-[#2b4a73] transition-transform transform hover:scale-105">
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>Accountability</h2>
          <p className='text-base sm:text-lg mb-4'>
            All employees are responsible, take complete ownership of their actions, and promote a culture of accountability and trust.
          </p>
          <h5 className='text-4xl font-bold'>&#8594;</h5>
        </div>
        <div className="bg-[#36668b] text-white rounded-3xl p-6 lg:p-8 shadow-xl hover:bg-[#2b4a73] transition-transform transform hover:scale-105">
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>Service</h2>
          <p className='text-base sm:text-lg mb-4'>
            We meticulously understand our client’s expectations and then provide tailored solutions to their problems.
          </p>
          <h5 className='text-4xl font-bold'>&#8594;</h5>
        </div>
        <div className="bg-[#36668b] text-white rounded-3xl p-6 lg:p-8 shadow-xl hover:bg-[#2b4a73] transition-transform transform hover:scale-105">
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>Inclusivity</h2>
          <p className='text-base sm:text-lg mb-4'>
            We have an inclusive workforce with an emphasis on creating a comfortable environment for everyone irrespective of gender, caste, race, and religion.
          </p>
          <h5 className='text-4xl font-bold'>&#8594;</h5>
        </div>
      </div>
    </div>
  );
}

export default Values;
