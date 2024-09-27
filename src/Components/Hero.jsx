import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';
import './hero.css';
import { gsap, Power4 } from 'gsap';
import bgvid from '../assets/bgvid.mp4';
import linkedin from '../assets/Linkdin.png'
import guru from '../assets/guru.png'
import fiver from '../assets/fiver.png'
import freelancer from '../assets/Freelancer.png'
import upwork from '../assets/Upwork.png'

const logos = [
  linkedin,
  guru,
  fiver,
  freelancer,
  upwork
];

const SlideItem = ({ index }) => (
  <div className="slider-logo flex items-center justify-center text-2xl text-white mx-2 lg:mx-4">
    <img width={'150px'} src={`${logos[index % logos.length]}`} alt="" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
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
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Hero = () => {
  useEffect(() => {
    gsap.fromTo('#logo', { y: 30, opacity: 0 }, { duration: 1, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#text', { y: 30, opacity: 0 }, { duration: 0.8, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#smtext', { y: 30, opacity: 0 }, { duration: 1.3, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#button1', { x: -40, y: 40, opacity: 0 }, { duration: 2.6, x: 0, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#button2', { x: 40, y: 40, opacity: 0 }, { duration: 2.6, x: 0, y: 0, ease: Power4.easeInOut, opacity: 1 });
    gsap.fromTo('#slider', { y: 40, opacity: 0 }, { duration: 3, y: 0, ease: Power4.easeInOut, opacity: 1 });
  }, []);

  return (
    <Element name='home'>
      <div id='background-video-container' className='hero relative w-full h-screen bg-cover bg-center'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src={bgvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4'>
          <h5 id='text' className='text-center text-white font-bold lg:text-6xl md:text-4xl text-3xl opacity-0 mt-20'>
            Navigating Your Digital Future
          </h5>
          <h1 id='text' className='circle-text relative text-center mb-10 font-semibold text-white mt-5 opacity-0'>
            Revolutionize
          </h1>
          <h6 id='text' className='gradientText text-center font-bold py-1 opacity-0 lg:text-4xl md:text-3xl text-2xl'>
            Crafting Digital Excellence with Precision and Innovation.
          </h6>
          <h1 id='text' className="text-center text-3xl text-white font-semibold mt-5">
            <Typewriter
              options={{
                strings: [
                  'Innovate',
                  'Create',
                  'Transform'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <h2 id='text' className='text-center my-5 text-white text-xl'>Transforming Ideas into Digital Solutions.</h2>
          <div id='slider' className="w-full lg:w-4/5 mx-auto opacity-0 mt-10">
            <Slider {...settings}>
              {[...Array(8).keys()].map((_, index) => (
                <SlideItem key={index} index={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
