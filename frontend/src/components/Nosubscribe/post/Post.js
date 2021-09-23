import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
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
                    <span className="postUsername">James Bond</span>
                    <span className="postDate">. Yesterday</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>Need dry 'Khomba' shale for medicine</b> <br/>Address : ABC Rd, Kalubowila <br/>Contact No : 071*******</span>
                </div>
                <img className="postImg" src='../../assets/post/we.png' alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                </div>
                <div className="postBottomRight">
                    <ViewAgendaIcon />
                    <span className="postCommentText">Bid Now</span>
                </div>
            </div>
        </div>
    </div>

    <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                {/* <Link to={`/profile/${user.username}`}> */}
                <img
                    className="postProfileImg"
                    src="../../../assets/person/3.jpeg"
                    alt=""
                />
                {/* </Link> */}
                <span className="postUsername">Nimal</span>
                <span className="postDate">. 3 days ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <div className="postcenterText">
                <span className="postText"><b>Need organic beans</b> <br/>Address : Dehiwala, Sri Lanka <br/>Contact No : **********</span>
            </div>
            <img className="postImg" src="../../assets/post/3.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            </div>
            <div className="postBottomRight">
                <ViewAgendaIcon />
                <span className="postCommentText">Bid Now</span>
            </div>
        </div>
    </div>
</div>

<div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                {/* <Link to={`/profile/${user.username}`}> */}
                <img
                    className="postProfileImg"
                    src="../../../assets/person/2.jpeg"
                    alt=""
                />
                {/* </Link> */}
                <span className="postUsername">P.B.Somarathne</span>
                <span className="postDate">. 3 days ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <div className="postcenterText">
                <span className="postText"><b>Need organic fertilizer</b> <br/>Address : ABC Rd, Monaragala <br/>Contact No : **********</span>
            </div>
            <img className="postImg" src="../../assets/post/p.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            </div>
            <div className="postBottomRight">
                <ViewAgendaIcon />
                <span className="postCommentText">Bid Now</span>
            </div>
        </div>
    </div>
</div>
</>
  );
}