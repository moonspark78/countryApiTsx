import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiCountry } from './Components/ApiCountry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Details} from "./Components/Details"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ApiCountry/>}/>
        <Route path='/details' element={ <Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
