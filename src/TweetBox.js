import React from "react"
import "./tweetbox.css"
import Avatar from "./Avatar"

const TweetBox = () => {
  return (
    <div className="tweetbox-wrapper">
      <div className="tweetbox-input">
        <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
        <input placeholder="What's happening?"></input>
      </div>
      <button className="tweetbox-tweet-button">Tweet</button>
    </div>
  )
}

export default TweetBox
