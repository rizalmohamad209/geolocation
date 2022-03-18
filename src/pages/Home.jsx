import React from 'react'

import {FaFile} from 'react-icons/fa';
import {MdGpsFixed} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className='container mx-auto px-4 py-6'>
      
      <div className='w-full flex gap-2'>

      <div className="w-1/2 justify-center text-center bg-blue-300 rounded-lg">
    <Link to="/upload">
      <h1 className='text-2xl mt-8'>Upload File</h1>
      <FaFile className='w-1/5 h-64 mx-auto'/>
      </Link>
     
      </div>
       <div className="w-1/2 justify-center text-center bg-blue-300 rounded-lg">
    <Link to="/gps">
      <h1 className='text-2xl mt-8'>GPS</h1>
      <MdGpsFixed className='w-1/5 h-64 mx-auto'/>
      </Link>
     
      </div>
      </div>

    </div>
  )
}

export default Home;