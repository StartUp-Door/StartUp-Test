import NewPosts from "../post/NewPost";
// import Post from "../post/Post";
import { useEffect, useState } from "react";
import "./feed1.css";

export default function Feed() {

  const [posts, setPosts] = useState(null);
  const id1 = localStorage.cid
  useEffect(() => {
    fetch(`http://localhost:4000/client/clientProfile/${id1}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        setPosts(data);
      })
  }, [])
  console.log(posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed">        
            Your Global Requests      
        </div>
        
        {/* <Post /> */}
        { posts && <NewPosts posts={posts} /> }
      </div>
    </div>
  );
}