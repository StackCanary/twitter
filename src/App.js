import React from "react"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import "./app.css"

const App = () => {
  return (
    <div className="sidebar-feed-widgets">
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Widgets></Widgets>
    </div>
  )
}

export default App
