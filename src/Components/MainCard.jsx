import React, { useState } from "react";
import One from "./MainCard/one";
import { gsap } from "gsap";
import { Power2 } from "gsap";
import { useInView } from "react-intersection-observer";

const MainCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  if (inView) {
    gsap.to("#maincard", {
      duration: 0.8,
      y: -50,
      ease: Power2.easeInOut,
      opacity: 1,
    });
  }

  const [selectedComponent, setSelectedComponent] = useState("Component1");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Component1":
        return (
          <One
            title="Software Development"
            desc="Unlock your vision with our tailored software development services. Whether you need a 
robust web application or a mobile solution, our expert developers leverage the latest 
technologies to create custom software that not only meets your business needs but also 
scales with your growth. With a focus on quality and user experience, we transform your 
ideas into high-performing, innovative solutions that drive results."
            percent="98%"
            percentDesc="A success rate of 98% has been achieved by providing custom software development services globally."
          />
        );
      case "Component2":
        return (
          <One
            title="No-Code Development"
            desc="Empower your team with our no-code development services! We simplify the app creation 
process, enabling you to build powerful applications without writing a single line of code. 
With intuitive drag-and-drop interfaces and a wealth of pre-built templates, we help you 
accelerate your digital transformation. Say goodbye to lengthy development cycles and hello
to rapid prototyping and deployment, all while keeping control over your project."
            percent="87%"
            percentDesc="Around 87% of the businesses find it cost efficient and easilyaccessible to undergo No Code Development Services from Logicruise."
          />
        );
      case "Component3":
        return (
          <One
            title="SEO"
            desc="Elevate your online presence with our expert SEO services. In today’s digital landscape, 
visibility is everything. Our tailored strategies combine keyword optimization, technical SEO, 
and high-quality content to improve your search engine rankings and attract the right 
audience. Let us help you turn clicks into customers by enhancing your website’s 
performance and driving organic traffic that converts."
            percent="89%"
            percentDesc="89% of businesses reported improved results after optimizing their websites using our SEO services"
          />
        );
      case "Component4":
        return (
          <One
            title="IT Outsourcing"
            desc="Focus on your core business while we take care of your IT needs! Our IT outsourcing 
services provide you with access to a dedicated team of experts, ready to handle everything 
from infrastructure management to software support. With our cost-effective solutions, you 
can enhance productivity, reduce operational costs, and ensure that your technology runs 
smoothly. Partner with us to gain flexibility and expertise without the overhead."
            percent="95%"
            percentDesc="95% of companies experienced reduced operational costs and improved efficiency by hiring talent from Logicruise"
          />
        );
      case "Component5":
        return (
          <One
            title="Emerging Technologies"
            desc="Stay ahead of the curve with our insights into emerging technologies! From AI and machine 
learning to blockchain and IoT, we help you harness the power of the latest innovations to 
drive efficiency and create new opportunities. Our team is dedicated to exploring how these 
technologies can transform your business processes, enhance customer experiences, and 
give you a competitive edge in a rapidly evolving landscape."
            percent="98%"
            percentDesc="A success rate of 98% has been achieved by providing custom software development services globally."
          />
        );
      case "Component6":
        return (
          <One
            title="Advisory"
            desc="Navigate the complexities of the IT landscape with our advisory services. Our experienced 
consultants work closely with you to understand your unique challenges and goals. We 
provide strategic guidance, best practices, and actionable insights that empower you to 
make informed decisions. Whether you’re looking to optimize your IT infrastructure or 
explore new technologies, we’re here to help you chart a path to success."
            percent="98%"
            percentDesc="A success rate of 98% has been achieved by providing custom software development services globally."
          />
        );
      default:
        return (
          <One
            title="Advisory"
            desc="Navigate the complexities of the IT landscape with our advisory services. Our experienced 
consultants work closely with you to understand your unique challenges and goals. We 
provide strategic guidance, best practices, and actionable insights that empower you to 
make informed decisions. Whether you’re looking to optimize your IT infrastructure or 
explore new technologies, we’re here to help you chart a path to success."
            percent="98%"
            percentDesc="A success rate of 98% has been achieved by providing custom software development services globally."
          />
        );
    }
  };

  return (
    <div
      ref={ref}
      id="maincard"
      className="lg:flex md:flex lg:flex-row md:flex-col items-center lg:w-4/5 md:w-11/12 p-4 mx-auto bg-[#1E2A38] rounded-2xl mt-40 opacity-0 transition-transform duration-500"
    >
      <div className="lg:w-1/3 md:w-full lg:pr-8 md:pr-0 flex flex-col items-center text-white bg-[#1E2A38] rounded-l-2xl lg:rounded-r-none p-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Explore Our Services
        </h2>
        <div className="flex flex-col space-y-4 w-full">
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component1")}
          >
            Software Development
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component2")}
          >
            No Code Development
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component3")}
          >
            SEO
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component4")}
          >
            IT Outsourcing
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component5")}
          >
            Emerging Technologies
          </button>
          <button
            className="bg-[#36668b] hover:bg-[#2a4d70] text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => setSelectedComponent("Component6")}
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
