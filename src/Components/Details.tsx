import "./Details.css"
import { useParams } from 'react-router-dom';
import { useCountriesContext } from '../Context/countriesContext';
import { CountriesType } from "../models/CountriesTypes";

export const Details = () => {
    const { countries } = useCountriesContext();



  return (
    <div className='details'>
        <h1>ApiCountry Details</h1>
        {country ? (
                <div className='dCard'>
                    <div className='text'>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <p>Continents: {country.region}</p>
                        {/* Vous devrez peut-être ajuster cela en fonction de la structure de vos données */}
                    </div>
                    {/* Ajoutez d'autres informations du pays si nécessaire */}
                    <img src={country.flags.flags} alt="" style={{width: "100px"}} />
                </div>
            ) : (
                <p>Country not found</p>
            )}
    </div>
  )
}
