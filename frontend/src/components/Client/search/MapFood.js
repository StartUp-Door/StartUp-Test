import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { format } from "timeago.js";

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
                            src="../../../assets/person/1.jpeg"
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
                      <span className="postText"><b>{user.fcat}, {user.ftype}, {user.fdesc}</b><br/>Email : {user.cemail} <br/>
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
                        <ViewAgendaIcon />
                        <span className="postCommentText">Comment</span>
                    </div>
                </div>
            </div>
        </div>
        </div>          
      ))}        

    </div>

  );
}