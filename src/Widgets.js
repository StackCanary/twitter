import React from "react"
import NewsTile from "./NewsTile"
import WhoToFollowTile from "./WhoToFollowTile"
import "./widgets.css"

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget">
        <h2 className="widget-title">What's happening</h2>
        <div className="widget-tile">
          <NewsTile></NewsTile>
        </div>
        <div className="widget-tile">
          <NewsTile></NewsTile>
        </div>
        <div className="widget-tile">
          <NewsTile></NewsTile>
        </div>
        <div className="widget-tile widget-show-more">Show more</div>
      </div>

      <div className="widget">
        <h2 className="widget-title">Who to follow</h2>
        <div className="widget-tile">
          <WhoToFollowTile></WhoToFollowTile>
        </div>
        <div className="widget-tile">
          <WhoToFollowTile></WhoToFollowTile>
        </div>
        <div className="widget-tile">
          <WhoToFollowTile></WhoToFollowTile>
        </div>
        <div className="widget-tile widget-show-more">Show more</div>
      </div>
    </div>
  )
  // TODO Who to follow widget
  // TODO What's happening widget
}

export default Widgets
