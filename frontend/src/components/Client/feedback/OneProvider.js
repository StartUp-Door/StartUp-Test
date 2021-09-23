import React from 'react'

//import Navbar from '../navbar/Navbar'
import Navbar from '../../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import ViewRating from '../feedback/ViewRating'
import { ProblemContextProvider } from "../../Plant/context/ProblemContext"
import Home from'../feedback/routes/Home'
import  './oneprovider.css'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import AddReview from './components/AddReview'

export default function OneProvider() {
    return (
        
       
       
        
       < ProblemContextProvider>
        
       <Navbar/>  
         
           
           <div className="homeContainer">
               <div className="part11">
               <Sidebar/>
               </div>
               <div className="part22">
               <AddReview/>
           </div>
           
             
          
          
           </div>
           <div className="bottom">
           <RestaurantDetailPage/>
           </div>
            

       
       </ProblemContextProvider>

        
    )
}
