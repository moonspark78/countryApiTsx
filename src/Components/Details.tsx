import "./Details.css"
import { Link, useParams } from 'react-router-dom';
import { useCountriesContext } from '../Context/countriesContext';
import { CountriesType } from "../models/CountriesTypes";


export const Details = () => {
    const { countries } = useCountriesContext();
    const { fifaCode } = useParams();

    // Recherche du pays correspondant au code "fifa" dans les paramètres de l'URL
    const country = countries.find((country: CountriesType) => country.fifa === fifaCode);
    



  return (
    <div className='details'>
        <Link to="/">
            <h1>ApiCountry Details</h1>  
        </Link>
        {country ? (
                <div className='dCard'>
                    <div className='text'>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <p>Continents: {country.region}</p>
                        {/* Vous devrez peut-être ajuster cela en fonction de la structure de vos données */}
                    </div>
                    {/* Ajoutez d'autres informations du pays si nécessaire */}
                    <img src={country.flags.png} alt="" style={{width: "100px"}} />
                </div>
            ) : (
                <p>Country not found</p>
            )}
    </div>
  )
}
