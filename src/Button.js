/* eslint-disable react/prop-types */
import React from "react"
import "./button.css"

const sizeOptions = {
  medium: "button--medium",
  large: "button--large",
}

const colorOptions = {
  blue: "button--blue",
  black: "button--black",
}

const Button = ({
  children,
  active = true,
  color = "blue",
  size = "large",
  onClick = () => undefined,
  type = "submit",
}) => {
  let classNames =
    "button " +
    colorOptions[color] +
    (!active ? " button--disabled " : " ") +
    sizeOptions[size]

  return (
    <button
      disabled={!active}
      className={classNames}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
