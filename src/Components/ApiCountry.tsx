import React, { useEffect, useState } from 'react'
import "./ApiCountry.css"
import {Countries} from "../models/CountriesTypes"
/* https://restcountries.com/v3.1/all */


export const ApiCountry = () => {
    const [countries, setCountries] = useState<Countries[]>([])
    const [searchCountry, setSearchCountry] = useState("")

   



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            console.log(data);
            setCountries(data);
        };
        fetchData();
    },[]);

    const filteredCountries = countries.filter(country => 
        country.name.common.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase()))





  return (
    <div className='apiCountry'>
        <h2>ApiCountry</h2>

        <input 
                placeholder="Searth the Country data..." 
                type="text" 
                name="text" 
                className="input"
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
        />

        <div className='apiCountryCard'>
            {
                filteredCountries.map((country, index) =>(
                    <div key={index}>
                        <p>{country.name.common}</p>
                        <img src={country.flags.png} alt="" />
                    </div>
            ))}
        </div>
    </div>
  )
}
