
import { MusicNote } from "@mui/icons-material";
import {CircularProgress} from "@mui/material";
import "../styles/Feed.css";
import { useFeed } from "../hooks/useFeed";
function Feed() {
  const {data: feed, isLoading } = useFeed();

  if(isLoading) return <div className="circular"><CircularProgress /></div>

  return (
  <div className="feed">
    {feed.map((item) => (
    <div className="video" key={item.aweme_id}>

      <div className="video-author">
        <p>{item.author?.nickname}</p>
      </div>

      <div className="video-wrapper">
        <video src={item.play} loop autoPlay={false} muted></video>
      </div>

      <div className="video-music flex">
        <MusicNote />
        <p className="video-music__title">{item.music_info.title}</p>
      </div>

      <div className="video-title">video title</div>
      </div>
      ))}
  </div>
 );
}

export default Feed;
