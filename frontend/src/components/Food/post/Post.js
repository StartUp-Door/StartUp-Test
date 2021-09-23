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
                        src="../../assets/person/6.jpeg"
                        alt=""
                    />
                    <span className="postUsername">Saman Kumara</span>
                    <span className="postDate">. 10 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>Need 3 Vegetable lunch packets</b> <br/>Address : MNO Rd, Rajagiriya <br/>Contact No : 071*******</span>
                </div>
                {/* <img className="postImg" src="../../assets/post/1.jpeg" alt="" /> */}
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
                        src="../../assets/person/3.jpeg"
                        alt=""
                    />
                    {/* </Link> */}
                    <span className="postUsername">P.B.Somarathne</span>
                    <span className="postDate">. 5 hours ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>Need 100 Kawun and Kokis for a traditional event</b> <br/>Address : XYZ Rd, Dehiwala <br/>Contact No : 077*******</span>
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

    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img
                        className="postProfileImg"
                        src="../../assets/person/4.jpeg"
                        alt=""
                    />
                    <span className="postUsername">Jerry Ann</span>
                    <span className="postDate">. 1 day ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>Need a Vegetable breakfast, around Colombo 2</b> <br/>Address : PQR Rd, Bambalapitiya <br/>Contact No : 071*******</span>
                </div>
                {/* <img className="postImg" src="../../assets/post/1.jpeg" alt="" /> */}
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