import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Blogs = () => {
  return (
    <div>
      <div className="text-center p-2">
        <h4 className="text-[#ADDAB2] text-[12px]">T H O U G H T S &nbsp; A N D &nbsp; B L O G S</h4>
        <h1 className='heroheading text-4xl text-white mt-3'>Read My Narrative</h1>
        <h5 className='text-white text-[17px]'>Pages filled with design wisdom, imagination and much more</h5>
      </div>
      <div className="cards lg:p-0 p-4 lg:flex lg:w-[100%] md:w-[70%] mx-auto justify-center mt-20 gap-[50px]">
        <div class="block lg:w-[20%] text-white rounded-3xl bg-[#123734] p-6 shadow-secondary-1 bg-[url('https://framerusercontent.com/images/GgKuYg1HHQ3WZT2x755JpKYeBQ.png?scale-down-to=1024')] hover:border-[0.1px] border-[#e8fce8] hover:text-[#e8fce8] hover:transition duration-150 hover:scale-[1.01]">
            <h5 class="mb-2 text-3xl mainheading font-medium leading-tight">Overcoming the Articulation Barrier in Gen AI</h5>
            <h5 className='font-bold text-5xl mt-20'>&#8594;</h5>
        </div>
        <div class="block lg:w-[20%] text-white lg:my-0 lg:my-0 my-5 rounded-3xl bg-[#123734] p-6 shadow-secondary-1 bg-[url('https://framerusercontent.com/images/GgKuYg1HHQ3WZT2x755JpKYeBQ.png?scale-down-to=1024')] hover:border-[0.1px] border-[#e8fce8] hover:text-[#e8fce8] hover:transition duration-150 hover:scale-[1.01]">
            <h5 class="mb-2 text-3xl mainheading font-medium leading-tight">Making design system from scratch for B2C products</h5>
            <h5 className='font-bold text-5xl mt-20'>&#8594;</h5>
        </div>
        <div class="block lg:w-[20%] text-white rounded-3xl bg-[#123734] p-6 shadow-secondary-1 bg-[url('https://framerusercontent.com/images/GgKuYg1HHQ3WZT2x755JpKYeBQ.png?scale-down-to=1024')] hover:border-[0.1px] border-[#e8fce8] hover:text-[#e8fce8] hover:transition duration-150 hover:scale-[1.01]">
            <h5 class="mb-2 text-3xl mainheading font-medium leading-tight">How to make design system from scratch for SAAS products</h5>
            <h5 className='font-bold text-5xl mt-20'>&#8594;</h5>
        </div>
      </div>
    </div>
  )
}

export default Blogs
