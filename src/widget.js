import React from "react"
import "./widget.css"

const Widget = ({ title, tiles }) => {
  return (
    <div className="widget">
      <h2 className="widget__title">{title}</h2>
      {tiles.map((Tile, i) => (
        <div key={i} className="widget__tile">
          <Tile></Tile>
        </div>
      ))}
      <div className="widget__tile">
        <span className="widget__show-more">Show more</span>
      </div>
    </div>
  )
}

export default Widget
