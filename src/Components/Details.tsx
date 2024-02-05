import React from 'react'
import "./Details.css"
import logo from '../logo.svg';

export const Details = () => {
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
