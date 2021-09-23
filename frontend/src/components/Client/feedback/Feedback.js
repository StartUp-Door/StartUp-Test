import React from 'react'
import Navbar from '../navbar/Navbar'
//import Sidebar from '../sidebar/Sidebar'
import ViewRating from '../feedback/ViewRating'
import { ProblemContextProvider } from "../../Plant/context/ProblemContext"
import Home from'../feedback/routes/Home'

import Sidebar from "../sidebar/Sidebar";

import "./feedback.css"

export default function Feedback() {
    return (
        
        < ProblemContextProvider>
        
        <Navbar/>

        <div className="homeContainer">
                <div>
                <Sidebar/>
                </div>
                <div className="part2">
                <Home/>
            </div>
            
            </div>
        </ProblemContextProvider>
    )
}
