import React from "react"
import CreateIcon from "@mui/icons-material/Create"

const SidebarButton = () => {
  return (
    <>
      <button className="sidebar-tweet-button-large">Tweet</button>
      <div className="sidebar-tweet-button-small">
        <CreateIcon></CreateIcon>
      </div>
    </>
  )
}

export default SidebarButton
