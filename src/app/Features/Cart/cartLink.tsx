'use client'
import { useAppSelector } from "@/app/Hooks/hooks";
import {FiShoppingCart } from 'react-icons/fi';
import React from "react";
import { BrowserRouter, Link as LLink, Route } from "react-router-dom";
import { getNumItems, getMemoizedNumItems } from "./cartSlice";
import { features } from "process";

export function CartLink(){
    const numItems= useAppSelector(getMemoizedNumItems);
    return(
        <BrowserRouter>
       
            <span>
            <FiShoppingCart/> &nbsp;&nbsp;{numItems?numItems:"Cart"}
            </span>

        </BrowserRouter>
    )
}