
import React, { StrictMode } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Featurebox from './components/Featurebox';
import About from './components/About';
import Contact from './components/Contactus';
import Footer from './components/Footer';
import Favorite from './components/Favourite';
import Team from './components/team';
import Footer2 from './components/Footer2';
import Slide from './components/imgslide';
import Autoslide from './components/autoslide';
import { BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from "react-dom";
import './index.css';
import './dc.css';



function App() {
  return (
    <div className="App">
    <Header/>
     <div className='f-heading'>
       <h1>Services</h1>
       <p>Here Some of Our Opportunities</p>
     </div>
     <Autoslide />
     {/* <Slide />*/}
     <Features/>  
     <Services/>
     <About/>
     <Featurebox/>
     <Contact/>
     <Favorite />
     <Team />
     <Router>
     <Footer2 />
     </Router>
    </div>
  );
}

export default App;