import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiCountry } from './Components/ApiCountry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Details} from "./Components/Details"
import { CountriesProvider } from './Context/countriesContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CountriesProvider>
          <Routes>
            <Route path='/' element={<ApiCountry/>}/>
            <Route path='/details/:id' element={ <Details/>}/>
          </Routes>
        </CountriesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
