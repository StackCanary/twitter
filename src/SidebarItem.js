import React from "react"

const SidebarItem = ({ text, Icon, active }) => {
  return (
    <div className={`sidebar-item ${active && "sidebar-item-active"}`}>
      <Icon></Icon>
      <div className="sidebar-item-label">{text}</div>
    </div>
  )
}

export default SidebarItem
