
import { useLocation, useParams }  from 'react-router-dom';
import { Button } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Test({setAuth}) {
 const {set} = useLocation();
 console.log(set)
 console.log(localStorage.cid)
 const logout = async e => {
    e.preventDefault();
    try {
        console.log(localStorage)
      localStorage.removeItem("role");
      localStorage.removeItem("cid");
      setAuth(false);
    <Redirect to="/" />
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

     return(
         <>
                   <h1>client</h1>
                   <Button onClick={e =>logout(e)}  >LogOUT</Button>

         </>
        
      
     )
}
