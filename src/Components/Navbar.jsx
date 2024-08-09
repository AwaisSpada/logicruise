import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// // Initialization for ES Users
// import {
//   Collapse,
//   Dropdown,
//   initTWE,
// } from "tw-elements";


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Works', href: '#works', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'FAQs', href: '/faq', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  // initTWE({ Collapse, Dropdown });

  return (
    <Disclosure as="nav" className="lg:flex rounded-3xl lg:rounded-full justify-center lg:w-[25%] md:w-[50%] w-[80%] mx-auto sticky top-5 z-10">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-[green] text-white' : 'text-gray-300 hover:bg-[green]/20 hover:text-white',
                    'rounded-md px-3 py-2 font-medium',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel className="sm:hidden flex justify-center">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Link
            to={item.href}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 border px-20 rounded-xl text-center hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
  )
}

export default Navbar
