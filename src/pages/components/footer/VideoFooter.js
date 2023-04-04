import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function VideoFooter({ name, desc, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@{name}</h3>
        <p>{desc}</p>

        <div className="videoFooterMusic">
          <MusicNoteIcon className="videoFooterIcon" />
          {/* calling a icon/elements from other local */}
          <div className="titleMusicAnimated">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <div className="videoFooterGraphic">
        <GraphicEqIcon fontSize="large" className="graphicMusic" />
      </div>
    </div>
  );
}

export default VideoFooter;
