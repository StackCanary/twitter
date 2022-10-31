/* eslint-disable react/prop-types */
import React from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import UploadIcon from "@mui/icons-material/Upload"
import TweetContentFooterItem from "./TweetContentFooterItem"
import "./post.css"

const Tweet = (props) => {
  return (
    <div className="post-wrapper">
      <div className="post-avatar-wrapper">
        <div className="post-avatar"></div>
      </div>
      <div className="post-content-wrapper">
        <div className="post-content-header">
          <span className="post-content-header-name">{props.name}</span>
          <span className="post-content-header-handle">@{props.handle}</span>
          <span className="post-content-header-dot">·</span>
          <span className="post-content-header-date">{props.date}</span>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className="post-content-tweet">{props.tweet}</div>
        {props.image && (
          <img className="post-content-image" src={props.image}></img>
        )}
        {/* TODO Too much space because of padding around icon */}
        {/* TODO Make the footer more squashed to the left */}
        <div className="post-content-footer">
          <TweetContentFooterItem
            Icon={ChatBubbleIcon}
            text="10"
          ></TweetContentFooterItem>
          <TweetContentFooterItem
            Icon={RepeatIcon}
            text="10"
          ></TweetContentFooterItem>
          <TweetContentFooterItem
            Icon={FavoriteBorderIcon}
            text="10"
          ></TweetContentFooterItem>
          <UploadIcon></UploadIcon>
        </div>
      </div>
    </div>
  )
}

export default Tweet
