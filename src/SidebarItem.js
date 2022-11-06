import React from "react"
import "./sidebaritem.css"

const SidebarItem = ({ text, Icon, active }) => {
  return (
    <div className={`sidebar-item ${active && "sidebar-item--active"}`}>
      <Icon></Icon>
      <div className="sidebar-item__label">{text}</div>
    </div>
  )
}

export default SidebarItem
