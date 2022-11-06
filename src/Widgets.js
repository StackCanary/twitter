import React from "react"
import NewsTile from "./NewsTile"
import WhoToFollowTile from "./WhoToFollowTile"
import Widget from "./widget"
import "./widgets.css"

const Widgets = () => {
  return (
    <div className="widgets">
      <Widget
        title="What's happening"
        tiles={[NewsTile, NewsTile, NewsTile]}
      ></Widget>

      <Widget
        title="Who to follow"
        tiles={[WhoToFollowTile, WhoToFollowTile, WhoToFollowTile]}
      ></Widget>
    </div>
  )
}

export default Widgets
