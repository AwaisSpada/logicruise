import React, {useEffect, useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import './hero.css'
import Logo1 from '../assets/electron.svg'
import {gsap} from 'gsap'
import {TweenMax, Power3, Power4} from 'gsap'
import { useGSAP } from '@gsap/react';
import { Link, Element } from 'react-scroll';

const logos = ['https://cdna.iconscout.com/img/duolingo.389f11b.svg', 'https://cdna.iconscout.com/img/uber.314ad21.svg', 'https://cdna.iconscout.com/img/microsoft.c051f44.svg', 'https://cdna.iconscout.com/img/airbnb.69a8173.svg', 'https://cdna.iconscout.com/img/google.c0129cb.svg', 'https://cdna.iconscout.com/img/amazon.90c4794.svg', 'https://cdna.iconscout.com/img/disney.042cf1c.svg', 'https://cdna.iconscout.com/img/instacart.d64c895.svg']; 



const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center h-64 bg-transparent w-[100px] mx-auto">
    <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} className="max-h-full max-w-full" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 800, // Transition speed in milliseconds
  autoplay: true, // Auto play slides
  autoplaySpeed: 2000, // Time between slides in milliseconds
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
    gsap.to('#logo', {
      duration: 1,
      y: -30,
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#text', {
      duration: 0.8,
      y: -40,
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#smtext', {
      duration: 1.3,
      y: -40,
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#button1', {
      duration: 2.6,
      x: 40,
      y: -40,
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#button2', {
      duration: 2.6,
      x: -40,
      y: -40,
      ease: Power4.easeInOut,
      opacity: 1,
    });
    gsap.to('#slider', {
      duration: 3,
      y: -40,
      ease: Power4.easeInOut,
      opacity: 1,
    });
  }, []);
  

  return (
    <Element name='home'>
      <div className='hero bg-[black]/30 w-[100%] mx-auto relative mt-[-270px]'>
      <div className='flex justify-center'>
        {/* <div id='logo' className="logodiv lg:mt-[100px] mt-[50px] opacity-0">
      <img className='headlogo w-14 ml-[90px] rotate-1' src="https://framerusercontent.com/images/K87K8oWoMPCJBJmyQKbXXvzbxdA.png" alt="" />
      <h5 className='before text-white bg-[#06160A] py-3 pr-5 pl-10 rounded-2xl'>
      Available for opportunities
      </h5>
        </div> */}
      </div>
      <h5 id='text' className=' text-center text-white lg:text-6xl text-3xl opacity-0 mt-[400px]'>
      One Stop Shop for All Your 
        </h5>
        <h1 className='circle-text relative text-center mb-20 text-5xl font-semibold text-[green]'>Digital Needs !</h1>
        <h6 id='smtext' className='text-center text-[#a0a0a0] opacity-0 text-4xl'>
        Hire Now! An Individual or a team from our talent pool for your
        </h6>
        <h1 className="text-center text-3xl text-[green] font-semibold">
                  <Typewriter
                    options={{
                      strings: [
                        'Enterprise',
                        'Startup',
                        'Growth Company'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <h2 className='text-center my-5 text-white text-xl'>The best brands choose Spadasoft</h2>
        <div id='slider' className="mx-auto lg:w-[70%] bg-transparent opacity-0">
      <Slider {...settings}>
        {[...Array(8).keys()].map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </Slider>
    </div>
    </div>
    </Element>
  )
}

export default Hero
