import React from 'react'
// import AddProblem from "./AddProblem"
import ViewTechRequest from "./ViewTechRequest"
import ViewFoodRequest from "./ViewFoodRequest"
import ViewPlant from './ViewPlantRequest'
import "./plantDash.css"
import { ProblemContextProvider } from "./context/ProblemContext";

export default function feed() {
    return (
        <div style={{flex:7.1}}>
            <ProblemContextProvider>
                {/* <AddProblem/>  */}
                <div style={{paddingRight:40}}>
                    <ViewTechRequest />  
                </div>                
            
            </ProblemContextProvider>
            <ProblemContextProvider>
                {/* <AddProblem/>  */}
                <div style={{paddingRight:40}}>
                    <ViewFoodRequest />  
                </div>                
            
            </ProblemContextProvider>
            <ProblemContextProvider>
                {/* <AddProblem/>  */}
                <div style={{paddingRight:40}}>
                    <ViewPlant />  
                </div>                
            
            </ProblemContextProvider>
        
        </div>
        
        
    )
}
