import React from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import "./followtile.css"

const FollowTile = () => {
  return (
    <div className="follow-tile">
      <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
      <div className="follow-tile-suggestion">
        <div>
          <div className="follow-tile-suggestion__name">Lex Fridman</div>
          <div className="follow-tile-suggestion__handle">@lexfridman</div>
        </div>
        <Button size="medium" color="black">
          Follow
        </Button>
      </div>
    </div>
  )
}

export default FollowTile
