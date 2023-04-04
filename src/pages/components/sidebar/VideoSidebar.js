import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares }) {

  /* The const/handdleLike created is for alternate state of setLiked parameters. When inicializate the "app" setLiked is false, but when the users click on botton like, the function called hanndleLike switch to the true alternating the state of setLiked*/
  const [liked, setLiked] = useState(false)
  function handdleLike() {
    setLiked(!liked) /* Not(!) Operator  */
  }


  return <div className="videoSidebar">
    <div
      className="videoSidebarOptions"
      onClick={handdleLike}
    >
      {/* Thernary Operator */}
      {liked ? <FavoriteIcon fontSize="large" color="error" /> : <FavoriteIcon fontSize="large" />}
      {/* <FavoriteIcon fontSize="large" />  Add animation/color onClick */}
      <p> {liked ? likes + 1 : likes} </p>
    </div>
    <div className="videoSidebarOptions">
      <MessageIcon fontSize="large" />
      <p>{messages}</p>
    </div>
    <div className="videoSidebarOptions">
      <ShareIcon fontSize="large" />
      <p>{shares}</p>
    </div>
  </div >;
}

export default VideoSidebar;
