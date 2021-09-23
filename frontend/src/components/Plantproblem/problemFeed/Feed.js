import React from 'react'
import AddProblem from "./AddProblem"
import ViewProblems from "./ViewProblems"
// import Navbar from "../navbar/Navbar"
// import Sidebar from "../sidebar/Sidebar";
//import { Container, Row, Col } from 'reactstrap';

// import Feed from '../feed/Feed';
import "./plantDash.css"
//import AllProblems from "./AllProblems"
//import { ProblemContextProvider } from "../context/ProblemContext";
import { ProblemContextProvider } from "../context/ProblemContext";
import "./plantDash.css"
import Timer from '../../timer/Timer';

export default function feed() {
    return (
        <div style={{flex:4}}>
        <ProblemContextProvider>
            <AddProblem/> 
            <div style={{paddingRight:40}}>
            <ViewProblems/>  
            </div>
           
            
                   
         
        </ProblemContextProvider>
        </div>
        
        
    )
}
