import React from 'react'
import { FaHome,FaFile } from "react-icons/fa";
import {MdGpsFixed} from 'react-icons/md';
import {Link} from 'react-router-dom';

const NavigatorBottom = () => {
  return (
    <div>

        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-blue-300 shadow">
          <div id="tabs" className="flex justify-between">
          <Link to="/">
            <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <FaHome className='mx-auto w-20 h-7'/>
              <h1 className="tab tab-home block text-xl">Home</h1>
            </div>
            </Link>
            <Link to="/gps">
           <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <MdGpsFixed className='mx-auto w-20 h-7'/>
              <h1 className="tab tab-home block text-xl">GPS</h1>
            </div>
            </Link>
            <Link to="/upload">
           <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <FaFile className='mx-auto w-20 h-7'/>
              <h1 className="tab tab-home block text-xl">Files</h1>
            </div>
            </Link>
         
      
          </div>
        </section>
      </div>

  )
}

export default NavigatorBottom