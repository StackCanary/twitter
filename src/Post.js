/* eslint-disable react/prop-types */
import React from "react"
import Avatar from "./Avatar"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import "./post.css"

const Post = ({ name, handle, date, tweet, image }) => {
  return (
    <div className="post">
      <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
      <div className="post-body">
        <PostHeader name={name} handle={handle} date={date}></PostHeader>
        <div>{tweet}</div>
        {image && <img className="post-image" src={image}></img>}
        <PostFooter></PostFooter>
      </div>
    </div>
  )
}

export default Post
