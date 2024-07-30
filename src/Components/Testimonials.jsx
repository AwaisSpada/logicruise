import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const logos = ['https://cdna.iconscout.com/img/duolingo.389f11b.svg', 'https://cdna.iconscout.com/img/uber.314ad21.svg', 'https://cdna.iconscout.com/img/microsoft.c051f44.svg', 'https://cdna.iconscout.com/img/airbnb.69a8173.svg', 'https://cdna.iconscout.com/img/google.c0129cb.svg', 'https://cdna.iconscout.com/img/amazon.90c4794.svg', 'https://cdna.iconscout.com/img/disney.042cf1c.svg', 'https://cdna.iconscout.com/img/instacart.d64c895.svg']; 



const SlideItem = ({ index }) => (
    <div
    class="testimonial block my-5 lg:w-[23rem] w-[20rem] rounded-3xl border border-[#2d3b46] text-left bg-[#0C1821] text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
    <div class="p-6">
    <div className='flex gap-2'>
    <div className='bg-[yellow] rounded-[50%]'>
    <img className='cardlogo w-[47px]' src="https://framerusercontent.com/images/8eQdoLnUaYcMtkByFREYQUOFBtU.png" alt="" />
    </div>
      <h5 class="mb-1 text-xl font-medium leading-tight">
      Amil Mishra <br /> <span className='text-sm'>Senior Designer @ Smallcasz</span>
      </h5>
    </div>
      <p class="mb-4 text-base leading-normal mt-5">
      I've had the pleasure of working with Sunal on a fast-moving project that has greatly benefited from his talents. Sunal is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favourite collaborators.
      </p>
    </div>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 8000, // Transition speed in milliseconds
  autoplay: true, // Auto play slides
  autoplaySpeed: -1000, // Time between slides in milliseconds
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: false,
  draggable: true,
  arrows: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Testimonials = () => {
  return (
    <div className='text-white mt-20'>
      <div className="text-center mb-20">
        <h4 className="text-[#ADDAB2] text-[12px]">
          T E S T I M O N I A L &nbsp; O F &nbsp; F E W &nbsp; F O L K S
        </h4>
        <h1 className="heroheading text-4xl text-white mt-3">
        Word On The Street About Me
        </h1>
        <h5 className="text-white text-[17px]">
        Few words from people who collaborated with me
        </h5>
      </div>
      <div className=" bg-transparent">
      <Slider {...settings}>
        {[...Array(8).keys()].map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Testimonials
