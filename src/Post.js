/* eslint-disable react/prop-types */
import React from "react"
import Avatar from "./Avatar"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import "./post.css"

const Post = ({ name, handle, date, tweet, image }) => {
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
        <PostFooter></PostFooter>
      </div>
    </div>
  )
}

export default Post
