import React from 'react'
import './main.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = ['https://framerusercontent.com/images/El644u0YyJGjpMkzrL7UWypGnY.png?scale-down-to=512']; 
const words = ['ACCESSIBILITY', 'USERFRIENDLY']



const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center bg-transparent w-[100px] mx-auto">
    <img  src={logos[index % logos.length]} alt={`Logo ${index + 1}`} className="max-h-full max-w-10 ml-8" />
    <h1 className='ml-10'>{words[index % words.length]}</h1>
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

const Main = () => {
  return (
    <div className='' id='works'>
      <div className="text-center">
        <h4 className="text-[#ADDAB2] text-[12px]">C U R A T E D &nbsp; W O R K</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Featured Case Studies</h1>
        <h5 className='text-white text-[17px]'>Compilation of case studies that evoke my sense of pride</h5>
      </div>
      <div className="cards mt-20">
      <div className="card1 lg:h-[40vh] xl:h-[60vh] md:h-[35vh] h-[60vh] lg:w-[70%] md:w-[80%] mx-auto lg:flex md:flex justify-between mt-2">
      <div className='cardd1 lg:w-[45%] md:w-[80%] w-[100%] lg:ml-0 ml-[-60px] lg:mt-0 md:mt-0 mt-[-30px]'>
        <h6 className='text-[#ADDAB2]'>AIRBNB . 2023</h6>
        <h2 className='mainheading text-xl lg:text-3xl text-white mt-5'>Curating AR experiences while travelling</h2>
        <hr className='lg:my-10 my-5' />
        <li className='text-white text-sm'>Onboarding increased to 12%.</li>
        <li className='text-white my-3 text-sm'>New users signups increased by 32%.</li>
        <li className='text-white text-sm'>Engagement increased by 20%.</li>
        <button className='bg-white py-2 px-5 rounded-lg mt-5'>View Case Study <span>&#8599;</span></button>
      </div>
      <div>
        <img className=' lg:mr-[-200px] md:mr-[-200px] md:mt-40 md:ml-0 lg:mt-0 mt-[-50px] lg:ml-0 ml-[150px]' src="https://framerusercontent.com/images/kOfIyp0iL0qysj50U1pITZMC34.png?scale-down-to=1024" alt="" />
      </div>
      </div>
      <div className="card2 lg:h-[40vh] xl:h-[60vh] md:h-[35vh] h-[60vh] relative lg:w-[70%] md:w-[80%] md:flex mx-auto lg:flex justify-between mt-20">
      <div className='cardd1 lg:w-[45%] lg:ml-0 ml-[-60px] md:mt-0 lg:mt-0 mt-[-30px]'>
        <h6 className='text-[#ADDAB2]'>SHOPIFY . 2023</h6>
        <h2 className='mainheading lg:text-3xl text-xl text-white mt-5'>Building profitable dropshipping dashboard</h2>
        <h4 className='text-white lg:my-5 my-2'>
        Aims to show you how you can start your own profitable business in just a few weeks, how company increased their MRR by 25%.
        </h4>
        <button className='bg-white py-2 px-5 rounded-lg mt-5'>View Case Study <span>&#8599;</span></button>
      </div>
      <div>
        <img className=' top-[70px] md:mt-40 lg:w-[60%] lg:ml-0 ml-[120px] left-[700px] lg:absolute' src="https://framerusercontent.com/images/YAfBNcJrzSMGkcAcvQuFANAAqG0.png?scale-down-to=1024" alt="" />
      </div>
      </div>
      <div className="card3 lg:w-[70%] md:w-[80%] md:h-[35vh] lg:h-[40vh] xl:h-[60vh] h-[60vh] mx-auto lg:flex md:flex justify-between mt-20">
      <div className='cardd1 lg:w-[45%] lg:ml-0 ml-[-60px] md:mt-0 lg:mt-0 mt-[-30px]'>
        <h6 className='text-[#ADDAB2]'>DELLOITE . 2023</h6>
        <h2 className='mainheading lg:text-3xl text-xl text-white mt-5'>Terrific: An app that helps you find a home tutor</h2>
        <h4 className='text-white my-5'>
        Terrific Tutors is a mobile app which will help people (students/parents) to find a home tutor.        </h4>
        <button className='bg-white py-2 px-5 rounded-lg mt-5'>View Case Study <span>&#8599;</span></button>
      </div>
      <div>
        <img className=' lg:mr-[-200px] lg:mt-20 md:mt-40 lg:ml-0 md:ml-0 ml-[120px] my-[-50px]' src="https://framerusercontent.com/images/ohHTiq0PH6PnnqZsdmwKnCGWyXM.png?scale-down-to=1024" alt="" />
      </div>
      </div>
      <div className="card4 lg:w-[70%] md:h-[35vh] lg:h-[40vh] xl:h-[60vh] h-[60vh] md:w-[80%] mx-auto lg:flex md:flex justify-between mt-20 relative">
      <div className='cardd1 lg:ml-0 ml-[-60px] lg:mt-0 mt-[-30px]'>
        <h6 className='text-[#ADDAB2]'>HEADOUT . 2023</h6>
        <h2 className='mainheading lg:text-3xl text-xl text-white mt-5'>Enhancing the payment flow of Headout</h2>
        <hr className='my-10' />
        <li className='text-white text-sm'>Onboarding drop-offs decreased to 12%.</li>
        <li className='text-white my-3 text-sm'>New users signups increased by 23%.</li>
        <li className='text-white text-sm'>New users signups increased by 23%.</li>
        <button className='bg-white py-2 px-5 rounded-lg mt-5'>View Case Study <span>&#8599;</span></button>
      </div>
      <div className=''>
        <img className='lg:absolute md:absolute lg:top-[100px] lg:left-[700px] md:top-[250px] md:left-[200px] lg:mt-20 lg:w-[70%] lg:ml-0 lg:mt-0 ml-[120px] mt-[-60px]' src="https://framerusercontent.com/images/UsXg6mjbKLKzrlPJKGSAw34OCc.png?scale-down-to=1024" alt="" />
      </div>
      </div>
      </div>
      <div className="rotate-[-1deg] py-2 my-20 bg-[#A1DEB0]">
      <Slider {...settings}>
        {[...Array(8).keys()].map((_, index) => (
          <SlideItem key={index} index={index} />
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Main
