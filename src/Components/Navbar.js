import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-900 text-white'>
      <div className='text-3xl font-bold'>Company Name</div>
      <div className='ml-4'>
        <Link
          to='/cowslist'
          className='text-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out mr-4'
        >
          ALL COWS
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;
