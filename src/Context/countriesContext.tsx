import { Children, createContext, useContext, useState } from "react";
import { Countries } from "../models/CountriesTypes";


const CountriesCotext = createContext<Countries[]>([]);
export const useCountriesCotext = () => useContext(CountriesCotext);

export const CountriesProvider = ({children}) =>{

    const [countries, setCountries] = useState<Countries[]>([])

    const contextValue ={
        countries,
        setCountries,
    }
    
    return (
        <CountriesCotext.Provider value={contextValue}>
            {children}
        </CountriesCotext.Provider>
    )
};