import { createContext, useContext, useState } from "react";
import { CountriesType } from "../models/CountriesTypes";

type CountriesContextValue = {
    countries: CountriesType[];
  };



export const CountriesContext = createContext<CountriesContextValue>({
    countries: [],
    setCountries: () => {} 
});
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