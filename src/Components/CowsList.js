import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiArrowRightCircle, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { GiCow } from 'react-icons/gi';

const CowsList = () => {
  const cows = useSelector((state) => state.cows);

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Cows List</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cows.map((cow, index) => (
            <Link
              to={`/${cow.id}/home`}
              className="p-6 bg-gray-800 rounded-lg flex flex-col justify-between hover:bg-gray-700 transition duration-300 ease-in-out"
              key={cow.id}
            >
              <div className="text-2xl font-semibold mb-2">
                <GiCow className="mr-2 inline-block" />
                {cow.name}
              </div>
              <div className="flex items-center mb-4">
                {cow.status ? (
                  
                  <>
                    <FiCheckCircle className="mr-2 text-green-500" />
                    <span className="text-green-500">Connected</span>
                  </>
                ) : (
                  <>
                    <FiAlertCircle className="mr-2 text-red-500" />
                    <span className="text-red-500">Not Connected</span>
                  </>
                )}
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-500"> {index + 1}</div>
                <FiArrowRightCircle className="text-blue-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CowsList;
