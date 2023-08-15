import React, { useEffect, useState } from 'react'
import { Link, Outlet,useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Map from './Map';

const Location = () => {
let { id } = useParams();
let COWID = Number(id)

let cow = useSelector((state) => state.cows.filter((cow)=>cow.id === COWID))[0];

let lat = cow.location.lat
let long = cow.location.long

return (
    <div>
    <Link to={`/${cow.id}/home`} >HOME</Link>
    <div className=' text-3xl ' >Loaction</div>
        CowId : { cow.id }    <br></br>
         Location:   { cow.location.lat} <br></br>
         Location:   { cow.location.long} <br></br>

         <Link to={`https://www.google.com/maps/dir/${lat},${long}/${lat},${long}/@${lat},${long},1000m/data=!3m1!1e3!4m2!4m1!3e2`} target='_blank' > SEE LOCATION </Link>

    </div>
)
}

export default Location