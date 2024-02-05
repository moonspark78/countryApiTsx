import React from 'react'
import "./Details.css"
import logo from '../logo.svg';
import { useParams } from 'react-router-dom';

export const Details = () => {
    const {id} = useParams();



  return (
    <div className='details'>
        <h1>ApiCountry Details</h1>
        <div className='dCard'>
            <div className='text'>
                <p>name</p>
                <p>capital</p>
                <p>population</p>
                <p>continents</p>
            </div>
            <img src={logo} alt="" style={{width: "100px"}} />
        </div>
    </div>
  )
}
