import { createContext, useContext, useState } from "react";
import { CountriesType } from "../models/CountriesTypes";





export const CountriesContext = createContext<any>(null);
export const useCountriesContext = () => useContext(CountriesContext);

export const CountriesProvider = ({children}:  { children: React.ReactNode }) =>{

    const [countries, setCountries] = useState<CountriesType[]>([])

    const contextValue ={
        countries,
        setCountries,
    }
    
    return (
        <CountriesContext.Provider value={contextValue}>
            {children}
        </CountriesContext.Provider>
    )
};