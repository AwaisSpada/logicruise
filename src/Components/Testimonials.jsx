import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    one: "Logicruise is one of the best, hard-working, passionate, and respectful people you can work with on Fiverr. His work was exceptional, providing amazing work on a platform he was somewhat unfamiliar with which utilised the Chrome CEF. Second, the work was done blazing fast which was unexpected for the amount of work. Third, his prices beat almost everyone on the market, and for the quality of work I wouldn't have been surprised if he charged much more. Fourth and final point, Logicruise’s timelines was unbeatable. He wanted to have meeting every day to discuss his progress and so that he could do revisions as we go, which even I couldn't keep up with. If you need react development, go with Logicruise!",
    tow: "abdu_sizz",
    three: "Egypt"
  },
  {
    one: "Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
    tow: "huzaifax1",
    three: "Canada"
  },
  {
    one: "Logicruise is very cooperative and well-behaved, demonstrating great dedication to the project. He delivered exceptional, high-quality work.",
    tow: "t11ger",
    three: "United Kingdom"
  },
  {
    one: "Delivered as per the discussion and recommendations. Absolutely recommended",
    tow: "huzaifax1",
    three: "Canada"
  },
  {
    one: "Excellent work, just as I expected. His dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
    tow: "saadmehmood09",
    three: "Pakistan"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: -1000,
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
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const Testimonials = () => {
  return (
    <div className="bg-gray-700 text-white py-20">
      <div className="text-center mb-16">
        <h4 className="text-blue-400 font-bold text-xs uppercase">
          T E S T I M O N I A L &nbsp; O F &nbsp; F E W &nbsp; F O L K S
        </h4>
        <h1 className="text-4xl font-bold mt-3">
          Word On The Street About Me
        </h1>
        <h5 className="text-lg mt-2">
          Few words from people who collaborated with me
        </h5>
      </div>
      <div className="px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-800 rounded-lg text-gray-200 p-6 hover:[&_div]:[&_img]:scale-130 flex flex-col justify-between h-[400px] transition-transform transform hover:scale-95 hover:shadow-xl">
                <div className="flex items-center mb-4 relative">
                  <img
                    className="w-12 h-12 rounded-full mr-4 transition-transform duration-300 ease-in-out hover:scale-130 border border-[black]/20 p-1"
                    src="https://framerusercontent.com/images/8eQdoLnUaYcMtkByFREYQUOFBtU.png"
                    alt="User Avatar"
                  />
                  <div>
                    <h5 className="text-xl font-semibold">{slide.tow}</h5>
                    <p className="text-sm text-gray-400">{slide.three}</p>
                  </div>
                </div>
                <p className="text-gray-300 flex-grow">
                  {slide.one.slice(0, 150)}...
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:underline mt-4"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
