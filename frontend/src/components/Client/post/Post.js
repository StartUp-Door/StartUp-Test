import "./post.css";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Post() {
    const [like, setLike] = useState();
    const [isLiked, setIsLiked] = useState();

    // const [user, setUser] = useState({});

    //   useEffect(() => {
    //     const fetchData = async () => {

    //         try{
    //             const response = await axios.get("/service/technician");
    //             setUser(response.data[3]);
    //             console.log(response.data);
    //             console.log(response.data[3].ttype);
    //         }
    //         catch(err){
    //             console.error(err.message);
    //         }

    //     }
    //     fetchData();
    //   }, []);

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
                    <span className="postUsername">pero</span>
                    <span className="postDate">. Yesterday</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <div className="postcenterText">
                    <span className="postText"><b>Hello, I am a Technician</b> <br/>Address : ABC Rd, Kalubowila <br/>Contact No : 071*******</span>
                </div>
                <img className="postImg" src="../../../assets/post/elec.jpeg" alt="" />
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
                <span className="postUsername">X.Y.Z Somapala</span>
                <span className="postDate">. 3 days ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <div className="postcenterText">
                <span className="postText"><b>I have a secret medicine for you...!!</b> <br/>Address : XYZ Rd, Dehiwala <br/>Contact No : 077*******</span>
            </div>
            <img className="postImg" src="../../../assets/post/p.jpg" alt="" />
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

</>
  );
}