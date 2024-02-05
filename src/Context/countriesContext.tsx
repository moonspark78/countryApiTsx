import { createContext, useContext, useState } from "react";
import { CountriesType } from "../models/CountriesTypes";



const CountriesCotext = createContext();
export const useCountriesCotext = () => useContext(CountriesCotext);

export const CountriesProvider = ({children}:  { children: React.ReactNode }) =>{

    const [countries, setCountries] = useState<CountriesType[]>([])

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