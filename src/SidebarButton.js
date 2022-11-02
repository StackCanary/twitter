import React from "react"
import CreateIcon from "@mui/icons-material/Create"
import Button from "./Button"

const SidebarButton = () => {
  return (
    <>
      <div className="sidebar-tweet-button-large">
        <Button>Tweet</Button>
      </div>
      <div className="sidebar-tweet-button-small">
        <CreateIcon></CreateIcon>
      </div>
    </>
  )
}

export default SidebarButton
