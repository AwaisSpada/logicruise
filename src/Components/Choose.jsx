import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power2 } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const Choose = () => {
    const [style, setStyle] = useState("bg-[#36668b] p-6 md:p-10 rounded-tr-3xl rounded-b-3xl");
    const [activeIndex, setActiveIndex] = useState(0);

    const contentMap = {
        0: {
            title: "Human Centric Organization",
            description: "Logicruise is your trusted partner in leveraging the latest technology trends. Our data-driven team of experts helps our clients achieve their desired results. We believe that building long-term partnerships with our clients is the only way to deliver exceptional results."
        },
        1: {
            title: "Innovative Solutions",
            description: "We focus on providing innovative solutions that utilize cutting-edge technology to keep your business ahead of the curve. Our team is dedicated to understanding your needs and delivering tailored solutions that drive success."
        },
        2: {
            title: "Expert Guidance",
            description: "Our team of experts offers unparalleled guidance in navigating the complex world of technology. From strategic planning to execution, we are here to support you every step of the way."
        }
    };

    const handleButtonClick = (index) => {
        setActiveIndex(index);
        switch (index) {
            case 0:
                setStyle("bg-[#36668b] p-6 md:p-10 rounded-tr-3xl rounded-b-3xl");
                break;
            case 1:
                setStyle("bg-[#36668b] p-6 md:p-10 rounded-3xl");
                break;
            case 2:
                setStyle("bg-[#36668b] p-6 md:p-10 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl");
                break;
            default:
                break;
        }
    };

    const buttons = ["Button", "Button", "Button"];
    const { title, description } = contentMap[activeIndex] || contentMap[0];

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inView) {
            gsap.to('#choose', {
                duration: 0.5,
                y: -100,
                ease: Power2.easeInOut,
                opacity: 1,
            });
            gsap.to('#choose1', {
                duration: 1,
                y: 0,
                ease: Power2.easeInOut,
                opacity: 1,
            });
            gsap.to('#choose2', {
                duration: 1,
                y: 0,
                ease: Power2.easeInOut,
                opacity: 1,
            });
            gsap.to('#choose3', {
                duration: 1,
                y: 0,
                ease: Power2.easeInOut,
                opacity: 1,
            });
            gsap.to('#choose4', {
                duration: 1,
                y: 0,
                ease: Power2.easeInOut,
                opacity: 1,
            });
        }
    }, [inView]);

    return (
        <div id='choose' ref={ref} className='bg-gray-800 mt-28 md:p-20 p-10 opacity-0'>
            <div className='container mx-auto text-white'>
                <div className='lg:flex lg:gap-12 flex-col-reverse lg:flex-row'>
                    <div className="left lg:w-1/2">
                        <h1 id='choose1' className='text-3xl md:text-4xl font-bold text-[#36668b] mb-4 md:mb-6'>Why Choose Logicruise?</h1>
                        <p id='choose2' className='text-base md:text-lg mb-4 md:mb-6'>
                            Our innovative solutions using cutting-edge technology equip our clients to stay ahead of the curve in this ever-changing technological landscape. Whether you are a small-scale business or a large enterprise, our years of experience have taught us to deliver the right solution tailored to your unique needs.
                        </p>
                        <Link to='contact' smooth={true} duration={1500}>
                            <button id='choose3' className='bg-[#36668b] py-2 px-6 rounded-full text-white text-base md:text-lg transition-transform transform hover:scale-105'>Contact Now</button>
                        </Link>
                    </div>
                    <div id='choose4' className="right lg:w-1/2 mt-6 lg:mt-0">
                        <div className='flex flex-wrap gap-4 mb-4 md:mb-6'>
                            {buttons.map((label, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleButtonClick(index)}
                                    className={`py-2 px-4 rounded-lg text-base md:text-lg font-medium cursor-pointer transition-colors ${
                                        activeIndex === index ? 'bg-[#36668b] text-white' : 'bg-gray-700 text-gray-300'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className={style}>
                            <h2 className='text-lg md:text-xl font-semibold mb-2'>{title}</h2>
                            <p className='text-sm md:text-base'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
