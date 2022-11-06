import React from "react"
import "./postfooteritem.css"

const PostFooterItem = ({ Icon, text }) => {
  return (
    <div className="post-footer-item">
      <Icon className="post-footer-item__icon"></Icon>
      <span className="post-footer-item__label">{text}</span>
    </div>
  )
}

export default PostFooterItem
