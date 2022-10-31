import React from "react"
import HouseIcon from "@mui/icons-material/House"
import TagIcon from "@mui/icons-material/Tag"
import NotificationsIcon from "@mui/icons-material/Notifications"
import EmailIcon from "@mui/icons-material/Email"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SettingsIcon from "@mui/icons-material/Settings"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import SidebarItem from "./SidebarItem"
import SideBarLogo from "./SideBarLogo"
import SidebarButton from "./SidebarButton"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBarLogo></SideBarLogo>
      <SidebarItem Icon={HouseIcon} text="Home" active={true}></SidebarItem>
      <SidebarItem Icon={TagIcon} text="Explore"></SidebarItem>
      <SidebarItem Icon={NotificationsIcon} text="Notifications"></SidebarItem>
      <SidebarItem Icon={EmailIcon} text="Messages"></SidebarItem>
      <SidebarItem Icon={AccountCircleIcon} text="Profile"></SidebarItem>
      <SidebarItem Icon={SettingsIcon} text="Settings"></SidebarItem>
      <SidebarItem Icon={MoreHorizIcon} text="More"></SidebarItem>
      <SidebarButton></SidebarButton>
    </div>
  )
}

export default Sidebar
