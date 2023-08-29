'use client'
import React from "react";
import{BrowserRouter,Routes,Route}from "react-router-dom"
import { Provider } from "react-redux"
import  ReactDOM  from "react-dom"
import Page from "./page"
import { CartLink } from "./Features/Cart/cartLink";
import {store} from "../app/Context/store"
// import UseAppSelector from "./Hooks/hooks

export default function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="./Features/Cart/cartLink" element={<CartLink/>}></Route>  
    </Routes>
      
    </BrowserRouter>
  )
}



