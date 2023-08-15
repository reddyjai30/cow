import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Temperature from './Temperature';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Dashboard = () => {
    let { id } = useParams();
    let COWID = Number(id)

    let cow = useSelector((state) => state.cows.filter((cow) => cow.id === COWID))[0];


    return (
        <div className='bg-gray-800 h-[100vh] overflow-y-scroll '>
            <div className='h-[12vh]'>
                <Navbar></Navbar>
            </div>
            <div className='flex'>
                <div className=' w-[77%]' >
                    <Outlet></Outlet>
                </div>
                <div className=' w-[23%] ' >
                <SideBar></SideBar>
                </div>
            </div>



        </div>
    )
}

export default Dashboard