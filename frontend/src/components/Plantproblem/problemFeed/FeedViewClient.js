import React from 'react'
import ViewBid from './ViewBid.js'
import "./plantDash.css"
import { ProblemContextProvider } from "../context/ProblemContext";
import "./plantDash.css"

export default function feed() {
    return (
        <div style={{flex:4}}>
        <ProblemContextProvider>

            <div style={{paddingRight:40}}>
            <ViewBid/>  
            </div>                   
         
        </ProblemContextProvider>
        </div>
        
        
    )
}
