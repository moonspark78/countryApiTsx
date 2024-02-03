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
                countries.map((country) =>(
                    <div>
                        <p>{country.name.common}</p>
                        <img src={country.flags.png} alt="" />
                    </div>
            ))}
        </div>
    </div>
  )
}
