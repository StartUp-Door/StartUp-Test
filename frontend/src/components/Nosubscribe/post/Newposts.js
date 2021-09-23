import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import Button from '@material-ui/core/Button'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { format } from "timeago.js";
import logo from '../banner.png'

import { Link } from "react-router-dom";

export default function Mappost( {posts} ) {
  const id = localStorage.cid
  return (
    <div>      

      
        <div >
          <div className="post">
            <div className="postWrapper">                
                <div className="postTop">
                    <div className="postTopLeft">
                   
                      
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postcenterText">
                       
                    </div>
                        <img className="postImg" src={logo} alt="sub" />
                </div>
                <div className="postBottom">
                    
                      <Button><Link to={{pathname:`/subcription/${id}`}} style={{textDecoration: 'none', hover: 'none', color:'blue'}}>Upgrade Membership</Link></Button>
                      <button></button>
                </div>
            </div>
        </div>
        </div>          
       

    </div>

  );
  
}