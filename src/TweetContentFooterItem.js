import React from "react"

const TweetContentFooterItem = ({ Icon, text }) => {
  return (
    <div className="post-content-footer-item">
      <Icon></Icon>
      <span className="post-content-footer-item-label">{text}</span>
    </div>
  )
}

export default TweetContentFooterItem
