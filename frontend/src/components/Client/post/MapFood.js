import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { format } from "timeago.js";

import { Link } from "react-router-dom";

export default function Mappost( {food} ) {

  return (
    <div>

      {food.map((user) => (
        <div key={user.fid}>
          <div className="post">
            <div className="postWrapper">                
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={user.cimage ? ("http://localhost:4000/images/" + user.cimage) : "http://localhost:4000/images/noprofile.png"}
                            alt=""
                        />
                        <span className="postUsername">{user.cname}</span>
                        <span className="postDate"> .{format(user.ftime)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postcenterText">
                      <span className="postText"><b>Category: {user.fcat}<br/>Type: {user.ftype}</b><br/>Description: {user.fdesc}<br/>Email : {user.cemail} <br/>
                        Address : {user.caddress} <br/>Contact No : {user.cno}<br/>Location : {user.floca} <br/>
                        Amount : {user.famount}<br/>
                        Price(LKR) : {user.fprice}<br/>
                      </span>
                    </div>
                        <img className="postImg" src={"http://localhost:4000/images/" + user.fimage} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    </div>
                    <div className="postBottomRight">
                      <Link to={`/requestFood/food/${user.fid}`} style={{textDecoration:"none", color:"black"}}><ViewAgendaIcon /><span className="postCommentText">Request Job</span></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>          
      ))}        

    </div>

  );
}