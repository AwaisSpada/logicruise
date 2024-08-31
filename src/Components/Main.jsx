import React, { useEffect } from "react";
import "./main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { gsap, Power3 } from "gsap";
import { Element } from "react-scroll";

const logos = [
  "https://framerusercontent.com/images/El644u0YyJGjpMkzrL7UWypGnY.png?scale-down-to=512",
];
const words = ["ACCESSIBILITY", "USERFRIENDLY"];

// Array of gradient backgrounds
const cardGradients = [
  "linear-gradient(to right, #37525f , #7c8a8e)", // Example gradients
  "linear-gradient(to right, #2f5b57 , #14385d)",
  "linear-gradient(to right, #688582 , #043b5e)",
  "linear-gradient(to right , #142a34, #6f9c99)",
  "linear-gradient(135deg, #d64161, #00bfae)",
  "linear-gradient(135deg, #00bfae, #d9bf77)",
  "linear-gradient(135deg, #d9bf77, #f05454)",
  "linear-gradient(135deg, #f05454, #f8b400)"
];

const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center text-white bg-transparent w-24 mx-auto">
    <img
      src={logos[index % logos.length]}
      alt={`Logo ${index + 1}`}
      className="h-12 mx-4"
    />
    <h1 className="text-lg font-medium">{words[index % words.length]}</h1>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Main = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      gsap.to("#heading", {
        duration: 1.5,
        y: 0,
        ease: Power3.easeInOut,
        opacity: 1,
      });
      gsap.to(".card", {
        duration: 1.5,
        y: 0,
        ease: Power3.easeInOut,
        opacity: 1,
        stagger: 0.3,
      });
    }
  }, [inView]);

  // Generate top values for sticky positioning
  const getTopValue = (index) => `${(index + 1) * 90}px`;

  return (
    <Element name="work">
      <div className="bg-gray-800 py-16">
        <div
          ref={ref}
          id="heading"
          className={`text-center transition-opacity ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h4 className="text-blue-400 font-semibold text-xs uppercase tracking-wide">
            Curated Work
          </h4>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3">
            Featured Case Studies
          </h1>
          <p className="text-gray-400 text-lg mt-2">
            Compilation of case studies that evoke my sense of pride
          </p>
        </div>

        <div className="mt-16 p-4">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="card flex md:flex-row flex-col justify-between items-center text-white p-6 rounded-lg shadow-lg mb-8 lg:w-3/4 mx-auto opacity-0 translate-y-8 transition-transform duration-1000 ease-in-out sticky"
              style={{
                top: getTopValue(index),
                background: cardGradients[index % cardGradients.length],
              }}
            >
              <div className="flex-1">
                <h6 className="text-blue-400 my-5 font-bold">
                  {index === 0
                    ? "AIRBNB . 2023"
                    : index === 1
                    ? "SHOPIFY . 2023"
                    : index === 2
                    ? "DELOITTE . 2023"
                    : "HEADOUT . 2023"}
                </h6>
                <h2 className="text-xl lg:text-2xl my-5 font-semibold mb-3">
                  {index === 0
                    ? "Curating AR experiences while travelling"
                    : index === 1
                    ? "Building profitable dropshipping dashboard"
                    : index === 2
                    ? "Terrific: An app that helps you find a home tutor"
                    : "Enhancing the payment flow of Headout"}
                </h2>
                <p className="mb-4 mt-5">
                  {index === 0 ? (
                    <>
                      Onboarding increased to 12%. <br /> New users signups
                      increased by 32%. <br /> Engagement increased by 20%.
                    </>
                  ) : index === 1 ? (
                    <>
                      Aims to show you how you can start your own profitable{" "}
                      <br /> business in just a few weeks, how company increased
                      their <br /> MRR by 25%.
                    </>
                  ) : index === 2 ? (
                    <>
                      Terrific Tutors is a mobile app <br /> which will help
                      people (students/parents) <br /> to find a home tutor.
                    </>
                  ) : (
                    <>
                      Onboarding drop-offs decreased to 12%. <br /> New users
                      signups increased by 23%.
                    </>
                  )}
                </p>
                <button className="bg-blue-500 py-2 px-4 mt-5 rounded-lg hover:bg-blue-600 transition duration-300">
                  View Case Study <span>&#8599;</span>
                </button>
              </div>
              <img
                className="md:w-[300px] md:p-0 p-10 h-[300px] rounded-2xl object-cover"
                src={
                  index === 0
                    ? "https://framerusercontent.com/images/kOfIyp0iL0qysj50U1pITZMC34.png?scale-down-to=1024"
                    : index === 1
                    ? "https://framerusercontent.com/images/YAfBNcJrzSMGkcAcvQuFANAAqG0.png?scale-down-to=1024"
                    : index === 2
                    ? "https://framerusercontent.com/images/ohHTiq0PH6PnnqZsdmwKnCGWyXM.png?scale-down-to=1024"
                    : "https://framerusercontent.com/images/UsXg6mjbKLKzrlPJKGSAw34OCc.png?scale-down-to=1024"
                }
                alt={`Case Study ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="py-4 bg-gray-900">
          <Slider {...settings}>
            {[...Array(8).keys()].map((_, index) => (
              <SlideItem key={index} index={index} />
            ))}
          </Slider>
        </div>
      </div>
    </Element>
  );
};

export default Main;
