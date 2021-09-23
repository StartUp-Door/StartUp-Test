import "./post.css";
import CommentIcon from '@material-ui/icons/Comment';
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Post() {
    // const [like, setLike] = useState();
    // const [isLiked, setIsLiked] = useState();

    const [user, setUser] = useState({});
    const id1 = localStorage.cid
      useEffect(() => {
        const fetchData = async () => {

            try{
                const response = await axios.get(`/service/technician/${id1}`);
                setUser(response.data[0]);
                console.log(response.data[0]);
                // console.log(response.data[0].cname);
            }
            catch(err){
                console.error(err.message);
            }
            // console.log(user.cname)
        }
        fetchData();
      }, []);

//   const likeHandler = () => {
//     try {
//       axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
//     } catch (err) {}
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };

  return (

    <>
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
                    <span className="postDate">{user.ttime}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                <span className="postText"><b>{user.tcat}</b><br/>
                        Location : {user.caddress} <br/>
                        {/* Contact No : {user.cno}<br/> */}
                        {/* Location : {user.tloca} <br/> */}
                        Available Day : {user.tavail}<br/>
                        </span>
                </div>
                <img className="postImg" src="../../../assets/post/elec.jpeg" alt="" /> 
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                </div>
                <div className="postBottomRight">
                    <CommentIcon />
                    <span className="postCommentText">Comments</span>
                </div>
            </div>
        </div>
    </div>
</>
  );
}