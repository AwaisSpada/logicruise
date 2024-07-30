import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
            text: {Error},
        });
    };

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_31qehco', 'template_hdgy2hq', form.current, {
        publicKey: 'jEDHb_ZtdIW4uthcE',
      })
      .then(
        () => {
            handleSave();
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='lg:flex justify-center bg-black text-white pt-20 pb-40 mt-40 rounded-t-[5%] lg:px-20 px-5 mb-[-200px]'>
      <div className='lg:w-[45%]'>
        <h1 className='font-bold text-5xl'>Partner With us & Get Your Quote</h1>
        <h5 className='text-xl my-5'>When you partner with Sapdasoft, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.</h5>
        <a href="" className='text-xl font-bold'>Email us at: info@spadasoft.com</a>
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
        <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col gap-5'>
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Name' name='from_name' required type="text" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Email' name='email' required type="email" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Company' name='company' required type="text" />
        <input className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4' placeholder='Phone Number' name='number' required type="text" />
        <select name='option' required className='border border-black/30 rounded-2xl lg:py-3 py-2 px-4'>
            <option>Select an Option</option>
            <option>Digital Marketing</option>
            <option>Website Development</option>
            <option>IT Outsourcing</option>
        </select>
        <input className='border border-black/30 rounded-2xl py-3 px-4' placeholder='Your Message' name='message' required type="text" />
        <button type='submit' className='block bg-black text-white p-3 rounded-2xl font-semibold hover:text-black hover:border hover:border-black'>Send me a Proposal</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
