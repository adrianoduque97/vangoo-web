import { React } from "react";
import "./Button.css";

export const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export function Button(props) {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonSize} ${checkButtonStyle} `}
      onClick={props.onClick}
      type={props.type}
    >
      {props.title}
    </button>
  );
}
