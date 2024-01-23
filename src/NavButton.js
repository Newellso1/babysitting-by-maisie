import { useState } from "react";

export default function NavButton() {
  const [menuButton, setMenuButton] = useState(false);
  const buttonStyle = {
    width: "4em",
    height: "4em",
    position: "fixed",
    right: "1em",
    top: "1em",
    borderRadius: "50%",
    zIndex: "10",
  };

  const buttonTop = {
    height: "0.75em",
    width: "100%",
    backgroundColor: menuButton ? "#6d715e" : "#6d715e99",
    position: "absolute",
    rotate: menuButton ? "45deg" : "0deg",
    transformOrigin: "top left",
    left: menuButton ? "0.79em" : "",
    top: menuButton ? "0.39em" : "0",
    bottom: "2em",
    transition: "rotate 200ms ease",
  };

  const buttonMiddle = {
    height: menuButton ? "0" : "0.75em",
    opacity: menuButton ? "0" : "1",
    width: "100%",
    backgroundColor: "#6d715e99",
    position: "absolute",
    top: "1.5.85em",
    transition: "opacity 200ms ease",
  };

  const buttonBottom = {
    height: "0.75em",
    width: "100%",
    backgroundColor: menuButton ? "#6d715e" : "#6d715e99",
    position: "absolute",
    bottom: menuButton ? "0.25em" : "0",
    rotate: menuButton ? "-45deg" : "0deg",
    transformOrigin: "bottom left",
    left: menuButton ? "0.79em" : "",
    transition: "rotate 200ms ease",
  };

  return (
    <div>
      <div style={buttonStyle} onClick={() => setMenuButton((open) => !open)}>
        <div style={buttonTop}></div>
        <div style={buttonMiddle}></div>
        <div style={buttonBottom}></div>
      </div>
    </div>
  );
}
