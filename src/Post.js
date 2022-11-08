/* eslint-disable react/prop-types */
import React from "react"
import Avatar from "./Avatar"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import "./post.css"

const Post = ({ name, handle, avatar, date, tweet, image }) => {
  console.log(avatar)
  console.log(name)
  return (
    <div className="post">
      <Avatar src={avatar} />
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
