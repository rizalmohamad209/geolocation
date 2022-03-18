import React from 'react'
import { FaHome,FaFile } from "react-icons/fa";
import {MdGpsFixed} from 'react-icons/md';

const NavigatorBottom = () => {
  return (
    <div>

        {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-blue-300 shadow">
          <div id="tabs" className="flex justify-between">
            <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <FaHome className='mx-auto w-36 h-9'/>
              <h1 className="tab tab-home block text-xl">Home</h1>
            </div>
           <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <MdGpsFixed className='mx-auto w-36 h-9'/>
              <h1 className="tab tab-home block text-xl">GPS</h1>
            </div>
           <div  className=" w-full text-center inline-block align-middle px-2 py-2">
             <FaFile className='mx-auto w-36 h-9'/>
              <h1 className="tab tab-home block text-xl">Files</h1>
            </div>
         
      
          </div>
        </section>
      </div>

  )
}

export default NavigatorBottom