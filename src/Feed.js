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

const tweet2 = {
  name: "Lex Fridman",
  handle: "lexfridman",
  date: "Oct 21",
  tweet:
    "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
  image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
}

const tweet3 = {
  name: "Lex Fridman",
  handle: "lexfridman",
  date: "Oct 21",
  tweet:
    "When I program, I'm leveraging the work of millions of other people, including code in libraries, compilers, operating systems, computer networks, and the complex web of hardware infrastructure that makes the whole thing run. It's fun being 1 curious human among 8 billion others.",
  image:
    "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
}

const Feed = () => {
  return (
    <div className="feed">
      <FeedHeader></FeedHeader>
      <TweetBox></TweetBox>
      <Tweet {...tweet1} />
      <Tweet {...tweet3} />
      <Tweet {...tweet2} />
      <Tweet {...tweet1} />
      <Tweet {...tweet2} />
    </div>
  )
}

export default Feed
