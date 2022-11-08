import React, { useState } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import "./tweetbox.css"

const TweetBox = ({ publishTweet }) => {
  const [tweet, setTweet] = useState("")

  let storeTweet = (e) => {
    e.preventDefault()

    publishTweet({
      name: "Twitter User",
      handle: "twitteruser",
      avatar: "./assets/catavatar.png",
      date: "Now",
      tweet: tweet,
    })

    setTweet("")
  }

  return (
    <div className="tweetbox">
      <div className="tweetbox-entry">
        <Avatar src="./assets/catavatar.png" />
        <input
          className="tweetbox-entry__input"
          placeholder="What's happening?"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        ></input>
      </div>
      <div className="tweetbox__tweet-button">
        <Button size="medium" onClick={storeTweet} active={tweet.length > 0}>
          Tweet
        </Button>
      </div>
    </div>
  )
}

export default TweetBox
