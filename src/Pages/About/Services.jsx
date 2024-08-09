import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const logos = ['https://spadasoft.com/wp-content/uploads/2023/10/Ads.svg', 'https://spadasoft.com/wp-content/uploads/2023/10/iecl.svg', 'https://spadasoft.com/wp-content/uploads/2023/05/gewch.svg', 'https://spadasoft.com/wp-content/uploads/2023/05/make-the-dot-1.svg', 'https://spadasoft.com/wp-content/uploads/2023/10/Solaire.svg']; 



const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center h-20 bg-[#A1DEB0]  mx-auto">
    <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} className="max-h-full max-w-full" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 2000, // Transition speed in milliseconds
  autoplay: true, // Auto play slides
  autoplaySpeed: -1000, // Time between slides in milliseconds
  slidesToShow: 6,
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

const Services = () => {
  return (
    <div className=''>
    <div className="text-center mt-20">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Read My Narrative</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
      <div className='lg:flex justify-evenly text-white lg:mt-40 mt-20 p-5'>
      <div>
        <h5 className='text-normal'>
        MARKETING SOLUTIONS PROVIDER
        </h5>
        <h2 className='lg:text-5xl text-4xl heroheading mt-5'>
        We’re a leader in digital <br /> marketing solutions
        </h2>
      </div>
      <div className='lg:w-[30%] text-xl lg:mt-0 mt-10'>
        <h5>
        After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.
        </h5>
      </div>
    </div>
    <div className='mx-auto mt-40 text-white'>
      <h5 className='font-semibold mb-10 text-center'>OUR CLIENTS</h5>
        <div id='slider' className="mx-auto w-[100%] bg-transparent rotate-[-1deg]">
      <Slider {...settings}>
        {[...Array(8).keys()].map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </Slider>
    </div>
    </div>
    </div>
  )
}

export default Services
