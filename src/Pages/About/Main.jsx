import React from 'react';

const Main = () => {
  return (
    <div className='bg-white text-gray-800 py-16 px-6 sm:px-8 lg:px-12'>
      <div className="text-center mb-12 lg:mb-24">
        <h4 className="text-[#36668b] font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-2">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight'>
          Read My Narrative
        </h1>
        <h5 className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl'>
          Pages filled with design wisdom, imagination, and much more
        </h5>
      </div>
      <div className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 lg:mb-20 max-w-3xl mx-auto'>
        Our dedicated team of experts understands the client’s unique needs and tailors a solution that best aligns with their goals and objectives. With this approach, we ensure we meet our client’s expectations and exceed them.
      </div>
      <div className='flex justify-center'>
        <img
          className='w-full max-w-3xl rounded-3xl shadow-xl'
          src="https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png"
          alt="Employee Retention"
        />
      </div>
    </div>
  );
}

export default Main;
