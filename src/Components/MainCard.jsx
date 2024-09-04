import React, { useState } from "react";
import One from './MainCard/one';
import { gsap } from 'gsap';
import { Power2 } from 'gsap';
import { useInView } from "react-intersection-observer";

const MainCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  if (inView) {
    gsap.to('#maincard', {
      duration: 0.8,
      y: -50,
      ease: Power2.easeInOut,
      opacity: 1,
    });
  }

  const [selectedComponent, setSelectedComponent] = useState('Component1');
  
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component1':
        return <One title="Get customized solutions to fulfill your software development needs." desc="Logicruise offers a variety of custom software development solutions, including:" percent="98%" percentDesc="A success rate of 98% has been achieved by providing custom software development services globally." />;
      case 'Component2':
        return <One title="Logicruise develops software applications without requiring traditional" percent="87%" percentDesc="Around 87% of the businesses find it cost efficient and easilyaccessible to undergo No Code Development Services from Logicruise." />;
      case 'Component3':
        return <One title="Enhance your business growth by improving your online visibility, driving targeted organic"  percent="89%" percentDesc="89% of businesses reported improved results after optimizing their websites using our SEO services" />;
      case 'Component4':
        return <One title="Get access to the global talent pool and drive your business forward with our cost-effective IT Outsourcing services." percent="95%" percentDesc="95% of companies experienced reduced operational costs and improved efficiency by hiring talent from Logicruise" />;
      case 'Component5':
        return <One title="With a wide range of innovations in the tech industry, the emerging technologies play a crucial role in advancement" percent="98%" percentDesc="A success rate of 98% has been achieved by providing custom software development services globally." />;
      case 'Component6':
        return <One title="Get customized solutions to fulfill your software development needs." desc="Logicruise offers a variety of custom software development solutions, including:" percent="98%" percentDesc="A success rate of 98% has been achieved by providing custom software development services globally." />;
      default:
        return <One title="Get customized solutions to fulfill your software development needs." desc="Logicruise offers a variety of custom software development solutions, including:" percent="98%" percentDesc="A success rate of 98% has been achieved by providing custom software development services globally." />;
    }
  };

  return (
    <div
      ref={ref}
      id="maincard"
      className="lg:flex md:flex lg:flex-row md:flex-col items-center lg:w-4/5 md:w-11/12 p-4 mx-auto bg-[#1E2A38] rounded-2xl mt-40 opacity-0 transition-transform duration-500"
    >
      <div className="lg:w-1/3 md:w-full lg:pr-8 md:pr-0 flex flex-col items-center text-white bg-[#1E2A38] rounded-l-2xl lg:rounded-r-none p-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Explore Our Services</h2>
        <div className="flex flex-col space-y-4 w-full">
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component1')}
          >
            Software Development
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component2')}
          >
            No Code Development
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component3')}
          >
            SEO
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component4')}
          >
            IT Outsourcing
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component5')}
          >
            Emerging Technologies
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent('Component6')}
          >
            Advisory
          </button>
        </div>
      </div>
      <div className="lg:w-2/3 md:w-full flex-1 bg-[#f5f5f5] rounded-r-2xl lg:rounded-l-none p-6">
        {renderComponent()}
      </div>
    </div>
  );
};

export default MainCard;
