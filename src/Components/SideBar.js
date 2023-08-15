import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    let { id } = useParams();
    let COWID = Number(id);
    let cowsArray = useSelector((state) => state.cows);

    let sortedArray = [...cowsArray].sort((a, b) => a.id - b.id)

    let preCowId
    let nextCowId
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[0].id === COWID) {
            preCowId = sortedArray[0].id
            break;
        } else {
            preCowId = sortedArray.filter(c => c.id < COWID)[0].id
        }
    }
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[sortedArray.length - 1].id === COWID) {
            nextCowId = sortedArray[sortedArray.length - 1].id
            break;
        } else {
            nextCowId = sortedArray.filter(c => c.id > COWID)[0].id
        }
    }

    let cow = useSelector((state) =>
        state.cows.filter((cow) => cow.id === COWID)
    )[0];

    

    return (
        <div className='p-4 bg-gray-900 text-white h-[87vh] ml-1'>
            <div className='text-2xl font-semibold mb-6'>Collar Details</div>
            <div className='mb-4'>
                <div className='font-medium'>Cow name :
                    <span className='text-blue-300 ml-2'>{cow.name}</span>
                </div>
            </div>
            <div className='mb-4'>
                <div className='font-medium'>Battery :
                    <span className={cow.battery < 30 ? ' ml-2 text-red-600 ' : ' text-white ml-2'}>{cow.battery}%</span>
                </div>
            </div>
            <div className='mb-0'>
                <div className='font-medium'>Status :
                    <span className=' ml-2'>
                        {cow.status ? (
                            <span className='text-green-300'>Connected</span>
                        ) : (
                            <span className='text-red-300'>Not Connected</span>
                        )}
                    </span>
                </div>
            </div>
            <div className='text-center'>
                <button className='bg-blue-500 mt-4 text-white py-2 px-4 rounded-lg mb-4'>
                    Sync Now
                </button>
            </div>

            <hr></hr>

            <div className=' flex justify-center gap-3 '>
                <Link to={`/${preCowId}/home`} ><button className='bg-green-500 mt-4 text-white py-2 px-4 rounded-lg mb-4'>
                    Previous Cow</button>
                </Link>

                <Link to={`/${nextCowId}/home`} ><button className='bg-green-500 mt-4 text-white py-2 px-4 rounded-lg mb-4'>
                    Next Cow</button>
                </Link>
            </div>

            <hr></hr>

            <div className='my-6'>
                <button className='bg-purple-500 w-full text-white py-2 px-4 rounded-lg mb-2'>
                    Configuration Manager
                </button>
                <button className='bg-purple-500 w-full text-white py-2 px-4 rounded-lg'>
                    User Management
                </button>
            </div>
            <div className='text-sm'>
                Powered by <br /> Company Name
            </div>
        </div>
    );
};

export default Sidebar;
