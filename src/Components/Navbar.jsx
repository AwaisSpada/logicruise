import React from 'react'
import { Link } from 'react-router-dom';
// Initialization for ES Users
import {
  Collapse,
  Dropdown,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Dropdown });
const Navbar = () => {
  return (
    <div className='lg:flex justify-center mt-5 md:w-[50%] w-[50%] mx-auto sticky top-3 z-10'>
      <div className='absolute'>
  {/* Main navigation container */}
  <nav className="flex-no-wrap border-[#414f57] border rounded-2xl lg:rounded-full relative flex w-full items-center justify-between py-2 shadow-dark-mild dark:bg-[#24323A] lg:flex-wrap lg:justify-start lg:py-4">
    <div className="flex w-full flex-wrap items-center justify-between px-3">
      {/* Hamburger button for mobile view */}
      <button className="block text-center items-center border-0 bg-transparent px-2 text-white/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        {/* Hamburger icon */}
        <span className="[&>svg]:w-7 [&>svg]:stroke-white/50 dark:[&>svg]:stroke-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {/* Collapsible navigation container */}
      <div className="!visible hidden  flex-grow basis-[100%] text-center items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-twe-collapse-item>
        {/* Left navigation links */}
        <ul className="list-style-none me-auto pl-5 gap-2 flex flex-col ps-0 lg:flex-row" data-twe-navbar-nav-ref>
          <li className="mb-4 lg:mb-0 lg:pe-2 lg:border-0 border rounded-xl" data-twe-nav-item-ref>
            {/* Dashboard link */}
            <Link className="text-white/60 transition font-bold duration-200 hover:text-white/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" to="/" data-twe-nav-link-ref>Home</Link>
          </li>
          {/* Team link */}
          <li className="mb-4 lg:mb-0 lg:pe-2 lg:border-0 border rounded-xl" data-twe-nav-item-ref>
            <a className="text-white/60 transition font-bold duration-200 hover:text-white/80 hover:ease-in-out focus:text-white/80 active:text-white/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" href="#works" data-twe-nav-link-ref>Works</a>
          </li>
          {/* Projects link */}
          <li className="mb-4 lg:mb-0 lg:pe-2 lg:border-0 border rounded-xl" data-twe-nav-item-ref>
            <Link className="text-white/60 transition font-bold duration-200 hover:text-white/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" to="/about" data-twe-nav-link-ref>About</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:pe-2 lg:border-0 border rounded-xl" data-twe-nav-item-ref>
            <Link className="text-white/60 transition font-bold duration-200 hover:text-white/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" href="#faq" data-twe-nav-link-ref>FAQ</Link>
          </li>
        </ul>
        {/* Left links */}
      </div>
    </div>
  </nav>
</div>

    </div>
  )
}

export default Navbar
