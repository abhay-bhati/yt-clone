import "./VideoCard.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function VideoCard({ thumbnail, avatar, title, channel, views, timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={thumbnail} />
      <div className="videoCard__info">
        <div className="videoCard__avatar">
          <Avatar src={avatar} alt="Channel Image" />
        </div>
        <div className="videoCard__channelInfo">
          <p className="videoCard__title">{title}</p>
          <p className="videoCard__channelName">{channel}</p>
          <p className="videoCard__views">
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
