import React from 'react'
import AddProblem from "./AddProblem"
import ViewProblems from "./ViewProblems"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar";
//import { Container, Row, Col } from 'reactstrap';

import Feed from '../feed/Feed';
import "./plantDash.css"
//import AllProblems from "./AllProblems"
import { ProblemContextProvider } from "../context/ProblemContext";
//import { ProblemContextProvider } from "./components/context/ProblemContext";
//import AddProblem from './AddProblem';
import "./plantDash.css"

export default function feed() {
    return (
        < ProblemContextProvider>
        
        <Navbar/>
        
            
            
        
            <ViewProblems/>
            
        
            
            <AddProblem/>
            
           
             

        
        </ProblemContextProvider>
        
    )
}
