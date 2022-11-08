import React, { useState, useEffect } from "react"
import FeedHeader from "./FeedHeader"
import Post from "./Post"
import TweetBox from "./TweetBox"
import "./feed.css"

const defaultTweets = [
  {
    name: "Arnold",
    handle: "Schwarzenegger",
    avatar: "./assets/arnold.jpg",
    date: "Sep 14",
    tweet:
      "The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion. That's what most people lack, having the guts to go on and just say they'll go through the pain no matter what happens.",
    image: "./assets/cat2.jpg",
  },
  {
    name: "Lex Fridman",
    handle: "lexfridman",
    avatar: "./assets/lex.jpg",
    date: "Oct 21",
    tweet:
      "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
    image: "./assets/cat1.avif",
  },
  {
    name: "Taylor Swift",
    handle: "taylorswift13",
    avatar: "./assets/taylor.jpg",
    date: "Nov 1",
    tweet:
      "I’m enchanted to announce my next tour: Taylor Swift | The Eras Tour, a journey through the musical eras of my career (past & present!) The first leg of the tour will be in stadiums across the US, with international dates to be announced as soon as we can!",
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
            <Post
              key={id}
              name={tweet.name}
              handle={tweet.handle}
              avatar={tweet.avatar}
              date={tweet.date}
              tweet={tweet.tweet}
              image={tweet.image}
            ></Post>
          )
        })}
    </div>
  )
}

export default Feed
