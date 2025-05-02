import React from 'react'
import banner from "../../public/Banner.jpg"
function Banner() {
  return (
    <div>
      <div className="mb-4 max-w-screen-2xl container mx-auto m-12 md:px-20 px-4 flex flex-col md:flex-row ">

        <div className="w-full md:order-1 order-2 md:w-1/2">
        <div className='space-y-12 mx-5 my-16'>
            <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-400'>new everyday!!!</span></h1>
            <p className=" px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut officiis asperiores voluptatem? Debitis placeat eligendi laudantium quae obcaecati id, quod totam corporis optio, molestiae expedita aliquam aspernatur, quibusdam porro?</p>
            <label className="z-0 input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
                </svg>
                <input type="email" className="z-0 p-2 border border-gray-300 rounded" placeholder="Enter your email to login" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
    </div>
    <button className="bg-pink-400 px-4 text-white mx-6 py-2 rounded my-0.1">Secondary</button>
    </div>
        
    <div className="w-full md:order-1 order-1 md:w-1/2">
        <img src={banner} />
    </div>

    
    </div>
    </div>
  )
}

export default Banner
