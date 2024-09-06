import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    one: "Logicruise is one of the best, hard-working, passionate, and respectful companies you can work with on Fiverr. Their work was exceptional, providing amazing results on a platform they were somewhat unfamiliar with, which utilized the Chrome CEF. Second, the work was done blazing fast, which was unexpected for the amount of work. Third, their prices beat almost everyone on the market, and for the quality of work, I wouldn't have been surprised if they charged much more. Fourth and final point, Logicruise’s timelines were unbeatable. They wanted to have meetings every day to discuss progress and make revisions as we went, which even I couldn't keep up with. If you need React development, go with Logicruise!",
    tow: "abdu_sizz",
    three: "Egypt"
  },
  {
    one: "Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
    tow: "huzaifax",
    three: "Canada"
  },
  {
    one: "Logicruise is very cooperative and well-behaved company, demonstrating great dedication to the project. They delivered exceptional, high-quality work.",
    tow: "t11ger",
    three: "United Kingdom"
  },
  {
    one: "Delivered as per the discussion and recommendations. Absolutely recommended",
    tow: "huzaifax",
    three: "Canada"
  },
  {
    one: "Excellent work, just as I expected. Their dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
    tow: "saadmehmood",
    three: "Pakistan"
  },
  {
    one:  "When you work with Logicruise you are working with a group of professionals who ensure they will understand the requirements and make any necessary adjustments to their work to deliver the job as expected. Even though they are new sellers, and sometimes have to discount their services because they are new in Fiverr, I'm sure they will build top ranking quickly. I will come back to them for new jobs. Thank you",
    tow: "rad_works",
    three: "United States"
  },
  {
    one: "Seller did their Best ,very much pleased highly appreciated their efforts and understanding. delivered my project even before deadline, speedy and accurate working.",
    tow: "zahreemsyed",
    three: "Australia"
  },
  {
    one: "Excellent work! Awais worked fast and kept the code in top quality, just like I wanted",
    tow: "salman7586",
    three: "United Kingdom"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000, // Set a more reasonable speed
  autoplay: true,
  autoplaySpeed: 2000, // Set a reasonable autoplay speed
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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-700 text-white py-20 px-5">
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
              <div className={`bg-gray-800 rounded-xl text-gray-200 p-6 flex flex-col justify-between h-[300px] transition-transform transform hover:scale-95 hover:shadow-xl ${slide.one.length > 500 ? 'scrollable' : 'no-scroll'}`}>
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
                  {expandedIndex === index ? slide.one : slide.one.slice(0, 200) + (slide.one.length > 200 ? '...' : '')}
                </p>
                <button
                  className="text-blue-400 hover:underline mt-4"
                  onClick={() => handleToggleExpand(index)}
                >
                  {expandedIndex === index ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
