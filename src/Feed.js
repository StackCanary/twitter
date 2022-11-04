import React, { useState, useEffect } from "react"
import FeedHeader from "./FeedHeader"
import Tweet from "./Tweet"
import TweetBox from "./TweetBox"
import "./feed.css"

const defaultTweets = [
  {
    name: "Lex Fridman",
    handle: "lexfridman",
    date: "Oct 21",
    tweet: "1",
    // "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
  },
  {
    name: "Lex Fridman",
    handle: "lexfridman",
    date: "Oct 21",
    tweet: "2",
    // "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
    image:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  },
  {
    name: "Lex Fridman",
    handle: "lexfridman",
    date: "Oct 21",
    tweet: "3",
    // "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
    image:
      "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
]

const Feed = () => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const localStorageTweets = localStorage.getItem("tweets")
    if (localStorageTweets === "undefined" || !localStorageTweets) {
      localStorage.setItem("tweets", JSON.stringify(defaultTweets))
    }

    setTweets(() => JSON.parse(localStorage.getItem("tweets")))
  }, [])

  function publishTweet(tweet) {
    localStorage.setItem("tweets", JSON.stringify(tweets.concat([tweet])))
    setTweets((prevTweets) => prevTweets.concat([tweet]))
  }

  console.log(tweets)

  return (
    <div className="feed">
      <FeedHeader></FeedHeader>
      <TweetBox publishTweet={publishTweet}></TweetBox>
      {tweets
        .slice()
        .reverse()
        .map((tweet, id) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Tweet
              key={id}
              name={tweet.name}
              handle={tweet.handle}
              date={tweet.date}
              tweet={tweet.tweet}
              image={tweet.image}
            ></Tweet>
          )
        })}
    </div>
  )
}

export default Feed
