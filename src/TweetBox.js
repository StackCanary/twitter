import React, { useState } from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import "./tweetbox.css"

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
    <div className="tweetbox">
      <div className="tweetbox-entry">
        <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
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
