import React from 'react'
import './style.css'
import { format } from 'timeago.js'

function ProfileNoti({noti}) {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div>
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={noti.cimage && noti.cimage ? ("http://localhost:4000/images/" + noti.cimage) : "http://localhost:4000/images/noprofile.png"} />
                            </div>
                            <div class="team-content">
                                <h4 class="name" style={{fontSize: 18}}>{noti && noti.cname}</h4>
                                <h4 class="title">{noti && noti.caddress}</h4>
                                <h4 class="title">{noti && noti.cno}</h4>
                                
                                <div style={{boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 5)', paddingTop: 5, paddingBottom: 5}}>
                                    <h4 class="title" style={{textAlign: 'center', fontWeight: 1500, fontSize: 12}}><b>_Requested Job Details_</b></h4>
                                    <h4 class="title">Job Title : {noti && noti.title}</h4>
                                    <h4 class="title">Description : {noti && noti.description}</h4>
                                    <h4 class="title">Requested Price (LKR) : {noti && noti.price}</h4>
                                    <h4 class="title">{noti && format(noti.created_on)}</h4>
                                </div>
                                <span style={{fontWeight: 500, fontSize:11}}>Further More you can Negotiate and Shedule the activity using Chat system</span>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileNoti
