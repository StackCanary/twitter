import React from "react"
import Avatar from "./Avatar"
import Button from "./Button"
import "./whotofollow.css"

const WhoToFollowTile = () => {
  return (
    <div className="wtf-tile">
      <Avatar src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png" />
      <div className="wtf-right">
        <div className="wtf-identity">
          <div className="wtf-name">Lex Fridman</div>
          <div className="wtf-handle">@lexfridman</div>
        </div>
        <Button size="medium" color="black">
          Follow
        </Button>
      </div>
    </div>
  )
}

export default WhoToFollowTile
