import { useContext, useEffect, useState } from "react";
import NewPosts from "../post/Newposts";
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/service/allproblems/posts')
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
            Plants And Crops Problem Feed     
        </div>
        
        {/* <Post /> */}
        { posts && <NewPosts posts={posts} /> }
      </div>
    </div>
  );
}