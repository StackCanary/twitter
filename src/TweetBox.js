import React, { useState } from "react"
import "./tweetbox.css"
import Avatar from "./Avatar"
import Button from "./Button"

const TweetBox = ({ publishTweet }) => {
  const [tweet, setTweet] = useState("")

  let storeTweet = (e) => {
    e.preventDefault()

    publishTweet({
      name: "Lex Fridman",
      handle: "lexfridman",
      date: "Oct 21",
      tweet: tweet,
    })

    setTweet("")
  }

  return (
    <div className="tweetbox-wrapper">
      <div className="tweetbox-input">
        <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
        <input
          placeholder="What's happening?"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        ></input>
      </div>
      <div className="tweetbox-tweet-button">
        <Button size="medium" onClick={storeTweet}>
          Tweet
        </Button>
      </div>
    </div>
  )
}

export default TweetBox
