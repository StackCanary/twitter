import React from "react"
import CreateIcon from "@mui/icons-material/Create"
import Button from "./Button"
import "./sidebarbutton.css"

const SidebarButton = () => {
  return (
    <>
      <div className="sidebar__large-tweet-btn-wrapper sidebar__large-tweet-btn-wrapper--display">
        <Button>Tweet</Button>
      </div>
      <div className="sidebar__small-tweet-btn-wrapper sidebar__small-tweet-btn-wrapper--display">
        <CreateIcon className="sidebar__small-tweet-btn"></CreateIcon>
      </div>
    </>
  )
}

export default SidebarButton
