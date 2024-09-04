import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Link, Element } from 'react-scroll';

const useSweetAlert = () => {
    const showAlert = ({ type, title, text }) => {
        Swal.fire({
            icon: type,
            title: title,
            text: text,
            confirmButtonText: 'OK',
        });
    };

    return { showAlert };
};
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
    const { showAlert } = useSweetAlert();

    const handleSave = () => {
        // Simulate a successful save operation
        showAlert({
            type: 'success',
            title: 'Email Sent Success',
        });
    };
    const handleError = () => {
        // Simulate a successful save operation
        showAlert({
            type: 'error',
            title: 'Email not send to Owner',
            text: 'Please Try Again',
        });
    };

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lysrfvi', 'template_hdgy2hq', form.current, {
        publicKey: 'jEDHb_ZtdIW4uthcE',
      })
      .then(
        () => {
            handleSave();
        },
        (error) => {
          handleError()
        },
      );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate an async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    sendEmail(event);
  };
  return (
    <Element name="contact">
      <div className='lg:flex justify-center bg-black text-white pt-20 pb-40 mt-40 rounded-t-[50px] lg:px-20 px-5 mb-[-200px]'>
      <div className='lg:w-[45%]'>
        <h1 className='font-bold text-5xl'>Partner With us & Get Your Quote</h1>
        <h5 className='text-xl my-5'>When you partner with Sapdasoft, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.</h5>
        <a href="" className='text-xl font-bold'>Email us at: info@Logicruise.com</a>
        <div className='flex gap-8 my-10 text-lg flex-row'>
        <div>
        <li className='mt-3'>Client-oriented</li>
        <li className='mt-3'>Independent</li>
        <li className='mt-3'>Competent</li>
        </div>
        <div>
        <li className='mt-3'>Results-driven</li>
        <li className='mt-3'>Problem-solving</li>
        <li className='mt-3'>Transparent</li>
        </div>
        </div>
        <h2 className='text-xl font-bold'>What happens next?</h2>
            <div className='mt-5 text-md flex flex-row justify-between gap-[10%] lg:px-0 px-1'>
            <h5 className='w-[20%] relative'><span className='text-2xl absolute top-5 left-[-25px] font-bold'>1</span> We Schedule a call at your convenience. </h5>
            <h5 className='w-[20%] relative'><span className='text-2xl absolute top-5 left-[-25px] font-bold'>2</span> We do a consulting meeting.</h5>
            <h5 className='w-[20%] relative'><span className='text-2xl absolute top-5 left-[-25px] font-bold'>3</span> We prepare a proposal. </h5>
            </div>
      </div>
      <div className='block lg:mt-0 mt-5 lg:w-[45%] text-black bg-white py-10 lg:px-16 px-5 rounded-3xl'>
      <h1 className='text-3xl font-semibold mb-10'>Get Your Quote</h1>
        <form ref={form} onSubmit={handleSubmit} action="" className='flex flex-col gap-5'>
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Name' required name='from_name' type="text" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Email' required name='email' type="email" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Company' required name='company' type="text" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Phone Number' required name='number' type="text" />
        <select name='option' required className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4'>
            <option>Select an Option</option>
            <option>Digital Marketing</option>
            <option>Website Development</option>
            <option>IT Outsourcing</option>
        </select>
        <textarea required className='border border-black/30 rounded-2xl py-3 px-4' placeholder='Your Message' name='message' type="text" />
        <button
          type="submit"
          disabled={isLoading}
          className={`relative bg-black text-white p-3 rounded-2xl font-semibold${
            isLoading ? '' : ''
          }`}
        >
          {isLoading && (
            <svg
              className="absolute inset-0 w-5 h-5 ml-auto top-3 right-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {isLoading ? 'Sending...' : 'Send me a Proposal'}
        </button>
        </form>
      </div>
    </div>
    </Element>
  )
}

export default Contact
