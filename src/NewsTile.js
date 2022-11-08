import React from "react"
import "./newstile.css"

const NewsTile = ({ header, content, footer }) => {
  return (
    <>
      <div className="news-header">{header}</div>
      <p className="news-content">{content}</p>
      <div className="news-footer">{footer}</div>
    </>
  )
}

export default NewsTile
