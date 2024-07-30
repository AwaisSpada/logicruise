import React, {useEffect, useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css'
import Logo1 from '../assets/electron.svg'
import {gsap} from 'gsap'
import {TweenMax, Power3} from 'gsap'
import { useGSAP } from '@gsap/react';

const logos = ['https://cdna.iconscout.com/img/duolingo.389f11b.svg', 'https://cdna.iconscout.com/img/uber.314ad21.svg', 'https://cdna.iconscout.com/img/microsoft.c051f44.svg', 'https://cdna.iconscout.com/img/airbnb.69a8173.svg', 'https://cdna.iconscout.com/img/google.c0129cb.svg', 'https://cdna.iconscout.com/img/amazon.90c4794.svg', 'https://cdna.iconscout.com/img/disney.042cf1c.svg', 'https://cdna.iconscout.com/img/instacart.d64c895.svg']; 



const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center h-64 bg-transparent w-[100px] mx-auto">
    <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} className="max-h-full max-w-full" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 2000, // Transition speed in milliseconds
  autoplay: true, // Auto play slides
  autoplaySpeed: 3000, // Time between slides in milliseconds
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
  arrows: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const Hero = () => {

  useEffect(() => {
    gsap.to('.logo', {
      duration: 0.5,
      y: -40,
      ease: Power3.easeInOut
    });
    gsap.to('#text', {
      duration: 0.8,
      y: -40,
      ease: Power3.easeInOut
    });
    gsap.to('#smtext', {
      duration: 1.3,
      y: -40,
      ease: Power3.easeInOut
    });
    gsap.to('#button1', {
      duration: 2.6,
      x: 40,
      y: -40,
      ease: Power3.easeInOut
    });
    gsap.to('#button2', {
      duration: 2.6,
      x: -40,
      y: -40,
      ease: Power3.easeInOut
    });
    gsap.to('#slider', {
      duration: 2.3,
      y: -40,
      ease: Power3.easeInOut
    });
  }, []);
  

  return (
    <div className='hero w-[100%] mx-auto relative mt-36'>
      <div className='logo flex justify-center'>
        <div className="logodiv lg:mt-[100px] mt-[50px]">
      <img className='headlogo w-14 ml-[90px] rotate-1' src="https://framerusercontent.com/images/K87K8oWoMPCJBJmyQKbXXvzbxdA.png" alt="" />
      <h5 className='before text-white bg-[#06160A] py-3 pr-5 pl-10 rounded-2xl'>
      Available for opportunities
      </h5>
        </div>
      </div>
      <h5 id='text' className='heroheading mt-10 text-center text-white lg:text-5xl text-3xl'>
            Welcome to <br /> my digital humble abode
        </h5>
        <h6 id='smtext' className='text-center text-[#a0a0a0] my-5'>
            I'm an independent designer. <br /> My interest lies in brand experience, and user experience.
        </h6>
        <div  className='flex  gap-3 justify-center mt-3'>
            <button id='button1' className="animbutton bg-white rounded-lg lg:py-2 lg:px-10 md:px-7 p-1">
            👋 Let's Talk
            </button>
            <button id='button2' className=" bg-[#14242b] ml-20 text-white border-2 border-[#404f57] rounded-lg py-2 px-10">
            About US
            </button>
        </div>


        <div id='slider' className="mx-auto w-[70%] bg-transparent">
      <Slider {...settings}>
        {[...Array(8).keys()].map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Hero
