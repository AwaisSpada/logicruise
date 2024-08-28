import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const logos = ['https://cdna.iconscout.com/img/duolingo.389f11b.svg', 'https://cdna.iconscout.com/img/uber.314ad21.svg', 'https://cdna.iconscout.com/img/microsoft.c051f44.svg', 'https://cdna.iconscout.com/img/airbnb.69a8173.svg', 'https://cdna.iconscout.com/img/google.c0129cb.svg', 'https://cdna.iconscout.com/img/amazon.90c4794.svg', 'https://cdna.iconscout.com/img/disney.042cf1c.svg', 'https://cdna.iconscout.com/img/instacart.d64c895.svg']; 


const slides = [
  {
  one:"Syed is one of the best, hard-working, passionate, and respectful people you can work with on Fiverr. His work was exceptional, providing amazing work on a platform he was somewhat unfamiliar with which utilised the Chrome CEF. Second, the work was done blazing fast which was unexpected for the amount of work. Third, his prices beat almost everyone on the market, and for the quality of worked I wouldnt have been surprised if he charged much more. Fourth and final point, Syed’s timelines was unbeatable. He wanted to have meeting every day to discuss his progress and so that he could do revisions as we go, which even I couldnt keep up with. If you need react development, go with Syed!",
  tow:"abdu_sizz",
  three:"Egypt"
  },
  {
    one:"Exceptional delivery, work was done as discussed and met my expectations. Amazing work and an amazing guy to with. Definitely recommended",
    tow:"huzaifax1",
    three:"Canada"
    },
    {
      one:"Syed is very cooperative and well-behaved, demonstrating great dedication to the project. He delivered exceptional, high-quality work,",
      tow:"t11ger",
      three:"United Kingdom"
      },
      {
        one:"Delivered as per the discussion and recommendations. Absolutely recommended",
        tow:"huzaifax1",
        three:"Canada"
        },
        {
          one:"Excellent work, just as I expected. His dedication to completing the project within the timeline is truly commendable and greatly appreciated.",
          tow:"saadmehmood09",
          three:"Pakistan"
          },
];

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
        <h4 className="text-[#36668b] font-bold text-[15px]">
          T E S T I M O N I A L &nbsp; O F &nbsp; F E W &nbsp; F O L K S
        </h4>
        <h1 className="heroheading text-4xl text-black mt-3">
        Word On The Street About Me
        </h1>
        <h5 className="text-black text-[17px]">
        Few words from people who collaborated with me
        </h5>
      </div>
      <div className=" bg-transparent">
      <Slider {...settings}>
      {slides.map((x)=>(
        <div
    class="testimonial block my-5 lg:w-[23rem] h-[350px] w-[20rem] rounded-3xl border border-[#2d3b46] text-left bg-[#36668b]/90 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
    <div class="p-6">
    <div className='flex gap-2'>
    <div className='bg-[yellow] rounded-[50%]'>
    <img className='cardlogo w-[47px]' src="https://framerusercontent.com/images/8eQdoLnUaYcMtkByFREYQUOFBtU.png" alt="" />
    </div>
      <h5 class="mb-1 text-xl font-medium leading-tight">
      {x.tow} <br /> <span className='text-sm'>{x.three}</span>
      </h5>
    </div>
      <p class="mb-4 text-base leading-normal mt-5 pb-20">
      {x.one.slice(0, 350)} . . .
      </p>
    </div>
  </div>
      ))}
      </Slider>
    </div>
    </div>
  )
}

export default Testimonials
