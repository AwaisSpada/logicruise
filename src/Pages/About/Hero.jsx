import React, {useEffect} from 'react';
import { Element } from 'react-scroll';
import { gsap, Power4 } from 'gsap';
import bgvid from '../../assets/bgvid.mp4'

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('#logo', { y: 30, opacity: 0 }, { duration: 1, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#text', { y: 300, opacity: 0 }, { duration: 1, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#smtext', { y: 30, opacity: 0 }, { duration: 1.3, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#button1', { x: -40, y: 40, opacity: 0 }, { duration: 2.6, x: 0, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#button2', { x: 40, y: 40, opacity: 0 }, { duration: 2.6, x: 0, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#slider', { y: 40, opacity: 0 }, { duration: 3, y: 0, ease: Power4.easeInOut, opacity: 1 });
  }, []);
  return (
    <Element name='about'>
      <div className='hero relative w-full h-screen bg-cover bg-center lg:px-24'>
      <video autoPlay muted loop className="background-video">
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="text-center top-24">
          <h4 id='text' className="text-[#36668b] font-semibold text-sm sm:text-base lg:text-lg mb-2">
            T H O U G H T S &nbsp; A N D &nbsp; B L O G S
          </h4>
          <h1 id='text' className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4'>
            Read My Narrative
          </h1>
          <h5 id='text' className='text-white text-sm sm:text-base lg:text-lg'>
            Pages filled with design wisdom, imagination, and much more
          </h5>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-16 mt-12 lg:mt-40'>
          <div className="lg:w-1/2 px-4">
            <h6 id='text' className='text-blue-100 lg:mt-0 mt-20 font-extrabold text-base sm:text-lg lg:text-5xl leading-relaxed'>
              At Our Company, we deliver bespoke IT solutions that help us build partnerships with businesses around the globe.
            </h6>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img
              id='text'
              className='w-[80%] h-auto rounded-3xl shadow-lg'
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/28/14/employee-first-day-stock.jpg"
              alt="Employee's first day at work"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
