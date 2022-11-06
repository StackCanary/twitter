import React from "react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import "./postheader.css"

const PostHeader = ({ name, handle, date }) => {
  return (
    <div className="post-header">
      <span className="post-header__name">{name}</span>
      <span className="post-header__handle">@{handle}</span>
      <span className="post-header__dot">·</span>
      <span className="post-header__date">{date}</span>
      <MoreHorizIcon></MoreHorizIcon>
    </div>
  )
}

export default PostHeader
