import React from 'react'
// import AddProblem from "./AddProblem"
import ViewOngoing from "./ViewOngoing"
import "./plantDash.css"
import { ProblemContextProvider } from "./context/ProblemContext";

export default function feed() {
    return (
        <div style={{flex:7.1}}>
            <ProblemContextProvider>
                {/* <AddProblem/>  */}
                <div style={{paddingRight:40}}>
                    <ViewOngoing />  
                </div>                   
            
            </ProblemContextProvider>
        </div>
        
        
    )
}
