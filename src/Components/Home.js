import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiThermometer, FiHeart, FiMapPin } from 'react-icons/fi';

const Home = () => {
  let { id } = useParams();
  let COWID = Number(id);

  let cow = useSelector((state) =>
    state.cows.filter((cow) => cow.id === COWID)
  )[0];

  return (
    <div className='p-4 bg-gray-800 text-white'>
      <div className='text-3xl font-bold mb-4'>HOME</div>

      <div className='flex flex-col space-y-6 px-24 py-10'>
        <Link
          to={`/${id}/temperature`}
          className='flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out'
        >
          <div className='flex items-center'>
            <div className='p-8'>
              <FiThermometer size={24} />
            </div>
            <div className='flex flex-col'>
              <div className='text-xl'>Temperature:</div>
              <div className='text-3xl'>
                {cow.temp}
                <sup>o</sup>C
              </div>
            </div>
          </div>
          <div className='mr-4'>
            <button className='bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out'>
              View On Graph
            </button>
          </div>
        </Link>

        <Link
          to={`/${id}/heartRate`}
          className='flex items-center justify-between bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300 ease-in-out'
        >
          <div className='flex items-center'>
            <div className='p-8'>
              <FiHeart size={24} />
            </div>
            <div className='flex flex-col'>
              <div className='text-xl'>Heart Rate:</div>
              <div className='text-3xl'>{cow.heartRate} bpm</div>
            </div>
          </div>
          <div className='mr-4'>
            <button className='bg-white text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out'>
              View On Graph
            </button>
          </div>
        </Link>

        <Link
          to={`/${id}/location`}
          className='flex items-center justify-between bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-300 ease-in-out'
        >
          <div className='flex items-center'>
            <div className='p-8'>
              <FiMapPin size={24} />
            </div>
            <div className='flex flex-col'>
              <div className='text-xl'>Location:</div>
              <div>
                <div>Latitude: {cow.location.lat}</div>
                <div>Longitude: {cow.location.long}</div>
              </div>
            </div>
          </div>
          <div className='mr-4'>
            <button className='bg-white text-purple-600 px-4 py-2 rounded-md shadow-md hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out'>
              View On Graph
            </button>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
