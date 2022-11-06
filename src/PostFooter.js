import React from "react"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import UploadIcon from "@mui/icons-material/Upload"
import PostFooterItem from "./PostFooterItem"
import "./postfooter.css"

const PostFooter = () => {
  return (
    <div className="post-footer">
      <PostFooterItem Icon={ChatBubbleIcon} text="10"></PostFooterItem>
      <PostFooterItem Icon={RepeatIcon} text="10"></PostFooterItem>
      <PostFooterItem Icon={FavoriteBorderIcon} text="10"></PostFooterItem>
      <PostFooterItem Icon={UploadIcon}></PostFooterItem>
    </div>
  )
}

export default PostFooter
