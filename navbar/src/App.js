import React from "react";
import Home from "./Home";
import Page1 from "./Page1"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login.js";
import App1 from "./App1";
import Page2 from './Page2'
export default function App(){
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/form" element={<App1/>}/>
      <Route path="/form2" element={<Page2/>}/>
    </Routes>
  </BrowserRouter>
);
}