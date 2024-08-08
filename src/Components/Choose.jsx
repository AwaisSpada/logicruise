import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import {gsap} from 'gsap'
import {TweenMax, Power3, Power2, Power1, Power0} from 'gsap'
import { useGSAP } from '@gsap/react';
import { useInView } from "react-intersection-observer";

const Choose = () => {
    const [style, setStyle] = useState("bg-[green] p-10 rounded-tr-3xl rounded-b-3xl");
    const [activeIndex, setActiveIndex] = useState(0);


    const contentMap = {
        0: {
            title: "Human Centric Organization",
            description: "Spadasoft is your trusted partner in leveraging the latest technology trends. Our data-driven team of experts helps our clients achieve their desired results. We believe that building long-term partnerships with our clients is the only way to deliver exceptional results."
        },
        1: {
            title: "Innovative Solutions",
            description: "We focus on providing innovative solutions that utilize cutting-edge technology to keep your business ahead of the curve. Our team is dedicated to understanding your needs and delivering tailored solutions that drive success."
        },
        2: {
            title: "Expert Guidance",
            description: "Our team of experts offers unparalleled guidance in navigating the complex world of technology. From strategic planning to execution, we are here to support you every step of the way."
        }
    };
    
    
    
    const handleButtonClick = (index) => {
    setActiveIndex(index);
    switch (index) {
      case 0:
        setStyle("bg-[green] p-10 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl");
        break;
      case 1:
        setStyle("bg-[green] p-10 rounded-3xl");
        break;
      case 2:
        setStyle("bg-[green] p-10 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl");
        break;
      default:
        break;
    }
  };



 
    const buttons = ["Button", "Button", "Button"];
    const { title, description } = contentMap[activeIndex] || contentMap[0];



    const { ref, inView } = useInView({
      triggerOnce: true,
      rootMargin: "-100px 0px",
    });
  
        if(inView){
          gsap.to('#choose', {
            duration:0.5,
            y: -100,
            ease: Power2.easeInOut,
            opacity: 1,
          });
        }
        if(inView){
          gsap.to('#choose1', {
            duration:2,
            y: 80,
            ease: Power2.easeInOut,
            opacity: 1,
          });
        }
        if(inView){
          gsap.to('#choose2', {
            duration:2,
            y: 80,
            ease: Power2.easeInOut,
            opacity: 1,
          });
        }
        if(inView){
          gsap.to('#choose3', {
            duration:2,
            y: 80,
            ease: Power2.easeInOut,
            opacity: 1,
          });
        }
        if(inView){
          gsap.to('#choose4', {
            duration:2,
            y: 80,
            ease: Power2.easeInOut,
            opacity: 1,
          });
        }
  return (
    <div id='choose' ref={ref} className='bg-[black]/30 mt-20 opacity-0 p-1'>
      <div className='lg:flex md:flex md:py-28 md:w-[100%] lg:py-36 lg:w-[80%] lg:gap-10 mx-auto text-white justify-center'>
        <div className="left md:mt-[-80px] lg:mt-[-100px]">
            <h1 id='choose1' className='text-5xl font-bold opacity-0'>Why should you choose Spadasoft?</h1>
            <h5 id='choose2' className='my-14 opacity-0'>Our innovative solutions using cutting-edge technology equip our clients to stay ahead of the curve in this ever-changing technological landscape. Whether you are a small-scale business or a large enterprise, the years of experience in the development industry have taught us to deliver the right solution tailored to everyone’s unique needs.</h5>
            <button id='choose3' className='bg-black py-4 px-10 rounded-full opacity-0'>Contact Now</button>
        </div>
        <div id='choose4' className="right md:w-[100%] lg:w-[150%] opacity-0 mt-10 md:mt-[-90px] lg:mt-[-100px]">
            <div className='flex md:text-sm lg:text-xl justify-between'>
            {buttons.map((label, index) => (
        <Link
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`py-5 rounded-t-2xl px-9 lg:px-10 ${
            activeIndex === index ? 'bg-[green]' : ''
          }`}
        >
          {label}
        </Link>
      ))}
            {/* <Link onClick={changeStyle2} className='py-5 focus:bg-[green] focus:rounded-t-2xl px-6'>How we do it?</Link> */}
            </div>
            <div className={style}>
                <h1 className='lg:text-2xl text-xl font-semibold mb-3'>{title}</h1>
                <h5>{description}</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
