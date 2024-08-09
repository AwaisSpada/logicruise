import React from 'react'
import { Link } from 'react-router-dom'
import {gsap} from 'gsap'
import {TweenMax, Power3, Power2, Power1, Power0} from 'gsap'
import { useGSAP } from '@gsap/react';
import { useInView } from "react-intersection-observer";

const Approach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

      if(inView){
        gsap.to('#approach', {
          duration:2,
          y: -100,
          ease: Power2.easeInOut,
          opacity: 1,
        });
      }
      if(inView){
        gsap.to('#approach1', {
          duration:2,
          ease: Power2.easeInOut,
          opacity: 1,
        });
      }
      if(inView){
        gsap.to('#approach2', {
          duration:2,
          ease: Power2.easeInOut,
          opacity: 1,
        });
      }
  return (
    <div ref={ref} id='approach' className='lg:flex md:flex justify-between lg:pb-10 lg:pt-20 text-white/90 opacity-0 lg:mt-0 mt-[100px] p-5'>
      <div id='approach1' className='lg:w-[35%] lg:ml-[200px]'> 
        <h2 className='font-semibold'>OUR APPROACH</h2>
        <h1 className='g:text-4xl text-3xl font-bold'>We equip you with the right tools to help you excel in this ever-changing digital landscape.</h1>
      </div>
      <div id='approach2' className='lg:w-[35%] lg:ml-0 sm:ml-0 md:ml-5 mt-5 lg:mr-[200px]'>
        <h2>
        Our team of dedicated experts tailor bespoke solutions, keeping in mind your objectives to enable you to thrive in this ever-changing digital landscape. We stay with you every step of the way by being your trusted partner in your digital acceleration journey. 
        </h2>
        <h1 className='mt-10 underline cursor-pointer decoration-[green] decoration-2 underline-offset-8'>view all solutions</h1>
      </div>
    </div>
  )
}

export default Approach
