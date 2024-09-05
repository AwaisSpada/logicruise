import React from 'react';
import { gsap, Power2, Power3 } from 'gsap';
import { useInView } from 'react-intersection-observer';

const Approach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  React.useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '#approach',
        { y: 50, opacity: 0 },
        { duration: 1, y: -50, opacity: 1, ease: Power3.easeInOut }
      );
      gsap.fromTo(
        '#approach1',
        { opacity: 0 },
        { duration: 1, opacity: 1, ease: Power3.easeInOut, delay: 0.3 }
      );
      gsap.fromTo(
        '#approach2',
        { opacity: 0 },
        { duration: 1, opacity: 1, ease: Power3.easeInOut, delay: 0.3 }
      );
    }
  }, [inView]);

  return (
    <div ref={ref} id='approach' className='flex flex-col lg:flex-row justify-between text-[#1E3A8A] opacity-0 md:p-20 p-10 mb-20'>
      <div id='approach1' className='lg:w-[45%]'>
        <h2 className='text-lg font-semibold text-[#36668b] mb-3'>OUR APPROACH</h2>
        <h1 className='text-2xl lg:text-4xl font-extrabold leading-tight text-[#36668b]'>
          We equip you with the right tools to help you excel in this ever-changing digital landscape.
        </h1>
      </div>
      <div id='approach2' className='lg:w-[45%] mt-6 lg:mt-0'>
        <p className='text-base lg:text-lg text-[#1E3A8A]'>
          Our team of dedicated experts tailor bespoke solutions, keeping in mind your objectives to enable you to thrive in this ever-changing digital landscape. We stay with you every step of the way by being your trusted partner in your digital acceleration journey.
        </p>
        <h1 className='mt-6 text-lg lg:text-xl underline cursor-pointer decoration-green-500 decoration-2 underline-offset-4'>
          View All Solutions
        </h1>
      </div>
    </div>
  );
};

export default Approach;
