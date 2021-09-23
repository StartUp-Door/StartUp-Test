import Post from "../post/Post";
import "./feed.css";

export default function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed">        
            Your Posted Job       
        </div>
        
        <Post />
      </div>
    </div>
  );
}