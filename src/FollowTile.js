import React from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import "./followtile.css"

const FollowTile = ({ name, handle, src }) => {
  return (
    <div className="follow-tile">
      <Avatar src={src} />
      <div className="follow-tile-suggestion">
        <div>
          <div className="follow-tile-suggestion__name">{name}</div>
          <div className="follow-tile-suggestion__handle">@{handle}</div>
        </div>
        <Button size="medium" color="black">
          Follow
        </Button>
      </div>
    </div>
  )
}

export default FollowTile
