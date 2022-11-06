/* eslint-disable react/prop-types */
import React from "react"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import UploadIcon from "@mui/icons-material/Upload"
import TweetContentFooterItem from "./TweetContentFooterItem"
import Avatar from "./Avatar"
import PostHeader from "./PostHeader"
import "./post.css"

const Tweet = ({ name, handle, date, tweet, image }) => {
  return (
    <div className="post">
      <div className="post-avatar-wrapper">
        <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
      </div>
      <div className="post-content">
        <PostHeader name={name} handle={handle} date={date}></PostHeader>
        <div className="post-content-tweet">{tweet}</div>
        {image && <img className="post-content-image" src={image}></img>}
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
