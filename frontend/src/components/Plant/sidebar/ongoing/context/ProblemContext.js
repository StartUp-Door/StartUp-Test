import React,{useState,createContext} from "react";

export const ProblemContext = createContext();

export const ProblemContextProvider = (props)=>{
    const[allproblems,setProblems]=useState([]);

    const addProblems = (problem)=>{
        setProblems([...allproblems,problem]);
    };

    return(
        <ProblemContext.Provider 
        value={{allproblems,setProblems,addProblems}}>
             {props.children}
        </ProblemContext.Provider>
    )
}