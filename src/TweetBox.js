import React from "react"
import "./tweetbox.css"

const TweetBox = () => {
  return (
    <div className="tweetbox-wrapper">
      <div className="tweetbox-input">
        <div className="tweetbox-avatar"></div>
        <input placeholder="What's happening?"></input>
      </div>
      <button className="tweetbox-tweet-button">Tweet</button>
    </div>
  )
}

export default TweetBox
