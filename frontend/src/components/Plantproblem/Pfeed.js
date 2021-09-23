import React from 'react'
//import AddProblem from "./AddProblem"
//import ViewProblems from "./ViewProblems"
//import Navbar from "../navbar/Navbar"
//import Navbar from '../../NoSearchNav/Navbar'
import Navbar from '../NoSearchNav/Navbar'
//import Sidebar from "../sidebar/Sidebar";
import Sidebar from "../Plant/sidebar/Sidebar";
//import { Container, Row, Col } from 'reactstrap';

//import Feed from '../feed/Feed';
//import "./plantDash.css"
//import AllProblems from "./AllProblems"
//import { ProblemContextProvider } from "../context/ProblemContext";
//import { ProblemContextProvider } from "./components/context/ProblemContext";
//import AddProblem from './AddProblem';
import ShareNew from './Share/ShareNew'
import Feed from "./feed/Feed"
import "./plantDash.css"

export default function Pfeed() {
    return (
        
        
        
            
            
        
           
            
        
        
            <div>
                <Navbar/>
            <div className="homeContainer">
                
                <div className="part1">
                <Sidebar/>
                </div>
                <div className="part2">
               <Feed/>
                </div>
                
            <div className="part3">
              
            <ShareNew/>
            </div>
            </div>
             
            </div>
        
      
        
    )
}
