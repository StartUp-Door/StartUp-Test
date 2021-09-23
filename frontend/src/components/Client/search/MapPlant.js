import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { format } from "timeago.js";

export default function Mappost( {plant} ) {

  return (
    <div>

      {plant.map((user) => (
        <div key={user.pid}>
          <div className="post">
            <div className="postWrapper">                
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src="../../../assets/person/1.jpeg"
                            alt=""
                        />
                        <span className="postUsername">{user.cname}</span>
                        <span className="postDate">.{format(user.ptime)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postcenterText">
                      <span className="postText"><b>{user.pcat}, {user.pdesc}</b><br/>Email : {user.cemail} <br/>
                        Address : {user.caddress} <br/>Contact No : {user.cno}<br/>Location : {user.ploca} <br/>
                        Price(LKR) : {user.pprice}<br/>
                      </span>
                    </div>
                        {/* <img className="postImg" src="../../../assets/post/elec.jpeg" alt="" /> */}
                        <img className="postImg" src={"http://localhost:4000/images/" + user.pimage} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    </div>
                    <div className="postBottomRight">
                        <ViewAgendaIcon />
                        <span className="postCommentText">Bid</span>
                    </div>
                </div>
            </div>
        </div>
        </div>          
      ))}

        

    </div>

  );
}