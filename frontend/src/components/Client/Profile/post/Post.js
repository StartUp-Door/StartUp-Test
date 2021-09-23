import "./post.css";
import CommentIcon from '@material-ui/icons/Comment';
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";

export default function Post() {
    const [like, setLike] = useState();
    const [isLiked, setIsLiked] = useState();

  const likeHandler = () => {
    // try {
    //   axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    // } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
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
                    <span className="postUsername">Client 1</span>
                    <span className="postDate">. Yesterday</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>My water pipe has broken. Is there anyone to fix it ?</b> <br/>Address : ABC Rd, Kalubowila <br/>Contact No : 071******* </span>
                </div>
                <img className="postImg" src="../../../../../assets/post/2.jpeg" alt="" />
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