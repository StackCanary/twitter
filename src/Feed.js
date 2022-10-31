import React from "react"
import FeedHeader from "./FeedHeader"
import Tweet from "./Tweet"
import TweetBox from "./TweetBox"
import "./feed.css"

const tweet1 = {
  name: "Lex Fridman",
  handle: "lexfridman",
  date: "Oct 21",
  tweet:
    "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
}

const Feed = () => {
  return (
    <div className="feed">
      <FeedHeader></FeedHeader>
      <TweetBox></TweetBox>
      <Tweet {...tweet1} />
      <Tweet {...tweet1} />
      <Tweet {...tweet1} />
      <Tweet {...tweet1} />
    </div>
  )
}

export default Feed
