import App from './App';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Routes, Route, useParams } from 'react-router-dom'
import Temperature from './Components/Temperature';
import { useEffect, useState } from 'react';
import Location from './Components/Location';
import Container from './Components/Home';
import HeartRate from './Components/HeartRate';
import CowsList from './Components/CowsList';
import Login from './Components/Login';
import Signup from './Components/Signup';

function Rout() {





  // function returning the value of temperature by id
  //  backend code will replace this 
  // API CODE


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<App></App>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/cowslist' element={<CowsList></CowsList>} ></Route>
        <Route path='/:id' element={<Dashboard  ></Dashboard>} >
          {
            <>
              <Route path='home' element={ <Container/> } ></Route>
              <Route path='temperature' element={<Temperature />} ></Route>
              <Route path='location' element={<Location></Location>} ></Route>
              <Route path='heartRate' element={<HeartRate/> } ></Route>
            </>
          }
        </Route>
      </Routes>
    </div>
  );
}

export default Rout;
