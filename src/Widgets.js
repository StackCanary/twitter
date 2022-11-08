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
        tiles={[NewsTile, NewsTile, NewsTile, NewsTile]}
        props={[
          {
            header: "Trending in United Kingdom",
            content: "Elon Musk",
            footer: "Trending with Barcelona",
          },
          {
            header: "Trending in United Kingdom",
            content: "Derby",
            footer: "19.8K Tweets",
          },
          {
            header: "World news . LIVE",
            content:
              "The latest updates from Iran as protests continue across the country",
            footer: "",
          },
          {
            header: "World news . LIVE",
            content:
              "Lula da Silva is set to become the next president of Brazil after defeating Bolsonaro",
            footer: "Trending with Amazon",
          },
        ]}
      ></Widget>

      <Widget
        title="Who to follow"
        tiles={[FollowTile, FollowTile, FollowTile]}
        props={[
          {
            name: "Bill Gates",
            handle: "BillGates",
            src: require("./assets/bill.jpg").default,
          },
          {
            name: "Nasa",
            handle: "Nasa",
            src: require("./assets/nasa.jpg").default,
          },
          {
            name: "Dwayne Johnson",
            handle: "TheRock",
            src: require("./assets/dwayne.jpeg").default,
          },
        ]}
      ></Widget>
    </div>
  )
}

export default Widgets
