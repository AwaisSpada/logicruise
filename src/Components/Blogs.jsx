import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Blogs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center p-4">
        <h4 className="text-blue-600 font-bold text-lg uppercase tracking-wider">Thoughts & Blogs</h4>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-2">Read My Narrative</h1>
        <h5 className="text-gray-700 text-lg mt-1">Pages filled with design wisdom, imagination, and much more</h5>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-4 lg:w-[80%] mx-auto">
        <div className="bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h5 className="text-2xl font-semibold mb-3">Overcoming the Articulation Barrier in Gen AI</h5>
          <div className="flex justify-end">
            <h5 className='text-4xl font-bold'>&#8594;</h5>
          </div>
        </div>
        <div className="bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h5 className="text-2xl font-semibold mb-3">Making Design Systems from Scratch for B2C Products</h5>
          <div className="flex justify-end">
            <h5 className='text-4xl font-bold'>&#8594;</h5>
          </div>
        </div>
        <div className="bg-gray-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h5 className="text-2xl font-semibold mb-3">How to Make Design Systems from Scratch for SAAS Products</h5>
          <div className="flex justify-end">
            <h5 className='text-4xl font-bold'>&#8594;</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
