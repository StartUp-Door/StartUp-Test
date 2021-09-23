import React,{useState,useEffect} from "react";
import Landing from './components/Landing/Landing'
import TechnicianDash from "./pages/Technician/TechnicianDash.js";
import FoodDash from "./pages/Food/FoodDash.js";
import PlantDash from "./pages/Plant/PlantDash.js";
import Profile from "./pages/Profile/Profile.js";
import ClientDash from './pages/Client/ClientDash.js' 
import Search from './pages/Client/Search'

import ProfileClient from './pages/ClientProfile/Profile'
import ClientPortfolioUpdate from './pages/ClientProfile/Client.UpdateProfile'
import Private from './pages/ClientProfile/PrivateRequest'

import ClientSearchTech from './pages/Client/clientSearchTech' 
import ClientSearchFood from './pages/Client/clientSearchFood' 
import ClientSearchPlant from './pages/Client/clientSearchPlant'

import RequestJobTech from './pages/Client/RequestJobTech'
import RequestJobPlant from './pages/Client/RequestJobPlant'
import RequestJobFood from './pages/Client/RequestJobFood'

import BidTech from './pages/Bid/BidTech.js'
import BidPlant from './pages/Bid/BidPlant'
import BidFood from './pages/Bid/BidFood'

import BidClientView from './pages/Bid/BidClientView'

import OngoingTech from './pages/Technician/Ongoing'
import OngoingPlant from './pages/Plant/Ongoing'  
import OngoingFood from './pages/Food/Ongoing' 

import Subcription from './components/Subcription/Subcription';
import Payment from './components/Subcription/Payment';
import Table from './ta/Ta';
import Login from './components/Authtication/Login';
import Register from './components/Authtication/Register';
import FogotPassword from './components/Authtication/FogotPassword';
import ResetPassword from './components/Authtication/ResetPassword';
import MonthlyPayment from './components/Subcription/MonthlyPayment';
import Nosubscribe from './pages/Nosubcribe/nosub';
// import Table from './ta/Ta';
import CategorySelect from "./components/Subcription/CategorySelect.js";

import Feedback from "./components/Client/feedback/Feedback"; 
 
import PlantFeedback from "./components/Plant/feedback/PlantFeedback.js";

import FoodFeedback from "./components/Food/feedback/FoodFeedback";
import TechFeedback from "./components/Technician/feedback/TechFeedback.js";

import AllQuestion from "./components/Questions/AllQuestion";
import OneProvider from "./components/Client/feedback/OneProvider.js";
import Feed from "./components/Plant/problemFeed/Feed";  
import Timer from "./components/timer/Timer"
import { RestaurantsContextProvider } from "./components/Client/feedback/context/RestaurantsContext";
import Pfeed from "./components/Plantproblem/Pfeed.js";
import Solution from "./components/Plantproblem/Solution"
import AdminHome from "./components/Admin/pages/AdminHome";




// import Table from './ta/Ta'; 

import Test from './ta/test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const checkrole = async () =>{
    try {
         const role = localStorage.role;
         role === "Client" ? setIsAuthenticated(true):setIsAuthenticated(false)
    } catch (err) {
     console.error(err.message);
    }
}
 
useEffect(()=>{
  checkrole();
},[])


 const [isAuthenticated, setIsAuthenticated] = useState(false);
// const [isClient, setIsClient] = useState("client");
//  const [IsProjectManager, setIsProjectManager] = useState("");
 const setAuth = boolean =>{
   setIsAuthenticated(boolean);
 }
  return (

    <Router>
      <Switch>
           {/* register */}
           <Route exact path="/" component={Landing}  />
           <Route exact path="/login" 
            render={props =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to={{pathname:`/client`}} />
              )
            }
          />
          <Route exact path="/register" component={Register}  />
          <Route path="/client" 
            render={props =>
              isAuthenticated ? (
                <ClientDash  {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
      
      <Route path="/forgotpassword" component={FogotPassword}  />
       <Route path="/reset/:id" component={ResetPassword}  />
       <Route path="/admin" component={AdminHome}   />

        {/* <Route exact path="/">
          <ClientDash />
        </Route> */}

        <Route path="/client">
          <ClientDash />
        </Route>

        <Route path="/technician">
          <TechnicianDash />
        </Route>

        <Route path="/food">
          <FoodDash />
        </Route>

        <Route path="/plant">
          <PlantDash />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/Clientprofile">
          <ProfileClient />
        </Route>
        <Route path="/privateRequest">
          <Private />
        </Route>
        <Route path="/portfolio/client">
          <ClientPortfolioUpdate />
        </Route>

        <Route path="/search">
          <Search /> 
        </Route>

        {/* client search */}
        <Route path="/SearchTech">
          <ClientSearchTech /> 
        </Route>
        <Route path="/SearchFood">
          <ClientSearchFood /> 
        </Route>
        <Route path="/SearchPlant">
          <ClientSearchPlant /> 
        </Route>

        {/* requestjob */}
        <Route path="/requestJob/tech/:id">
          <RequestJobTech /> 
        </Route>
        <Route path="/requestPlant/plant/:id">
          <RequestJobPlant />  
        </Route>
        <Route path="/requestFood/food/:id">
          <RequestJobFood />  
        </Route>

        <Route path="/viewBid/:id">
          <BidClientView />
        </Route>
        <Route path="/bidTech/bid/:id">
          <BidTech /> 
        </Route>
        <Route path="/bidPlant/bid/:id">
          <BidPlant />
        </Route>  
        <Route path="/bidFood/bid/:id">
          <BidFood />
        </Route>

        {/* ongoinTech */}
        <Route path="/ongoingTech">
          <OngoingTech />
        </Route>
        <Route path="/ongoingPlant">
          <OngoingPlant />
        </Route>
        <Route path="/ongoingFood">
          <OngoingFood />
        </Route>

        <Route path="/plantfeedback">
          <PlantFeedback />
        </Route> 

      

        <Route path="/restaurants/:id">
          <OneProvider />
        </Route>

        <Route path="/foodfeedback">
          <FoodFeedback />
        </Route>

        <Route path="/techfeedback">
          <TechFeedback/>
        </Route> 

        <Route path="/faq">
          <AllQuestion/>
        </Route>

        <Route path="/feedback">
          <Feedback />
        </Route>

        <Route path="/feed">
          <Feed />
        </Route>

        <Route path="/timer">
          <Timer/>
        </Route>

        <Route path="/pfeed">
          <Pfeed/>
        </Route>

        <Route path="/plantSolution/solution/:id">
          <Solution/>
      </Route>  
    
        {/* payment */}
       <Route path="/subcription/:id" component={Subcription}  />
       <Route path="/membership/payment/:id" component={Payment}  />
       <Route path="/monthlypayment/:id" component={MonthlyPayment}  />
       <Route path="/categoryselect/:id" component={CategorySelect}  />
       <Route path="/nosubscribe" component={Nosubscribe}  />
       <Route path="/test" component={Test}  />

      </Switch>
    </Router>
    
  );
}

export default App;
