import React, { useContext, useEffect, useState } from 'react'
import "./ApiCountry.css"
import {CountriesType} from "../models/CountriesTypes"
import {CountriesContext} from "../Context/countriesContext"
import { Link } from 'react-router-dom'
/* https://restcountries.com/v3.1/all */


export const ApiCountry = () => {
    /* const [countries, setCountries] = useState<Countries[]>([]) */
    const {countries, setCountries} = useContext(CountriesContext)
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

    const filteredCountries = countries.filter((country: CountriesType)  => 
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
                filteredCountries.map((country:CountriesType, index: number) =>(
                    <Link to={`/country/${country.id}`}> 
                        <div key={index}>
                            <p>{country.name.common}</p>
                            <img src={country.flags.png} alt="" />
                        </div>
                    </Link> 
            ))}
        </div>
    </div>
  )
}
