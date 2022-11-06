import React from "react"
import NewsTile from "./NewsTile"
import FollowTile from "./FollowTile"
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
        tiles={[FollowTile, FollowTile, FollowTile]}
      ></Widget>
    </div>
  )
}

export default Widgets
