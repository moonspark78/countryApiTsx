import React, { useEffect, useState } from 'react'
import "./ApiCountry.css"
/* https://restcountries.com/v3.1/all */

type Countries = {
    name: {
        common: string;
    };
    population: number;
    region: string;
    flags: {
        png: string;
    };
}

export const ApiCountry = () => {
    const [countries, setCountries] = useState<Countries[]>([])



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            console.log(data);
            setCountries(data);
        };
        fetchData();
    },[]);





  return (
    <div className='apiCountry'>
        <h2>ApiCountry</h2>
        <div className='apiCountryCard'>
            {
                countries.map((country) =>(
                    <div>
                    <p>{country.name.common}</p>
                    </div>
            ))}
        </div>
    </div>
  )
}
