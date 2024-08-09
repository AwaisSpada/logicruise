import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import One from './MainCard/one'
import Two from './MainCard/two'
import Three from './MainCard/three'
import Four from './MainCard/four'
import Five from './MainCard/five'
import Six from './MainCard/six'
import Main from "./Main";
import {gsap} from 'gsap'
import {TweenMax, Power3, Power2, Power1, Power0} from 'gsap'
import { useGSAP } from '@gsap/react';
import { useInView } from "react-intersection-observer";


const MainCard = () => {


  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

      if(inView){
        gsap.to('#maincard', {
          duration:0.8,
          y: -100,
          ease: Power2.easeInOut,
          opacity: 1,
        });
      }


  const [selectedComponent, setSelectedComponent] = useState(null);
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <One />;
      case 'Component2':
        return <Two />;
        case 'Component3':
        return <Three />;
        case 'Component4':
        return <Four />;
        case 'Component5':
        return <Five />;
        case 'Component6':
        return <Six />;
      // Add cases for other components
      default:
        return <One/>;
    }
  };
  return (
    <div ref={ref} id="maincard" className="lg:flex md:flex md:w-[90%] lg:w-[75%] mx-auto relative bg-black rounded-[50px] mt-52 opacity-0">
      <div className="left z-0 md:pl-10 md:pt-10 md:w-[100%] lg:pl-20 lg:pt-20 lg:w-[100%] text-white bg-black rounded-[50px]">
        <div className="lg:flex md:flex grid grid-rows-3 my-5 lg:my-0 grid-flow-col flex-col gap-2 text-sm lg:text-xl font-semibold lg:gap-[20px]">
          <a id="list1" className="cardButton rounded-full w-[100%] mx-auto" href="#component1" onClick={() => setSelectedComponent('Component1')}>Software Development</a>
          <a id="list2" className="cardButton rounded-full w-[100%] mx-auto" href="#component2" onClick={() => setSelectedComponent('Component2')}>No Code Development</a>
          <a id="list3" className="cardButton rounded-full w-[100%] mx-auto"  href="#component3" onClick={() => setSelectedComponent('Component3')}>Search Engine Optimization</a>
          <a id="list4" className="cardButton rounded-full w-[100%] mx-auto" href="#component4" onClick={() => setSelectedComponent('Component4')}>IT Outsourcing</a>
          <a id="list5" className="cardButton rounded-full w-[100%] mx-auto" href="#component5" onClick={() => setSelectedComponent('Component5')}>Emerging Techologies</a>
          <a id="list6" className="cardButton rounded-full w-[100%] mx-auto" href="#component6" onClick={() => setSelectedComponent('Component6')}>Advisory</a>
        </div>
      </div>
      <div className="z-[1]">
      {renderComponent()}
      </div>
        
    </div>
  );
};

export default MainCard;
