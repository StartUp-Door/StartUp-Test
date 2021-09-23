import React from 'react'
import './style.css'

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
                                <h4 class="title">{noti && noti.description}</h4>
                                <h4 class="title"><img style={{width: 200, height: '100%', borderRadius: '5%', alignItems:'center', textAlign: 'center'}} class="titleimg" src={noti.image ? "http://localhost:4000/images/" + noti.image : 'test'} ></img></h4>
                                <span style={{fontWeight: 500, fontSize:11}}>Further More you can Negotiate and Shedule the activity using Chat system</span>
                                {/* <h4 class="title">{noti && noti.cno}</h4> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileNoti
