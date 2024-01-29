export default function NavMenu({ menuButton, setMenuButton }) {
  const menuStyle = {
    position: "fixed",
    right: "3em",
    top: "2.8em",
    backgroundColor: "",
    userSelect: menuButton ? "" : "none",
    opacity: menuButton ? "1" : 0,
    transition: "all 400ms ease",
  };

  const menuBackground = {
    width: "30em",
    height: "30em",
    backgroundColor: "#a7a491",
    position: "fixed",
    right: menuButton ? "-15em" : "-33em",
    top: menuButton ? "-15em" : "-33em",
    borderRadius: "50%",
    userSelect: menuButton ? "" : "none",
    opacity: menuButton ? "3" : 0,
    transition: "all 200ms ease",
    zIndex: "5",
    boxShadow: "0 0 6em 12em #a7a491",
  };

  return (
    <div>
      <ul style={menuStyle}>
        <li>Home</li>
        <li style={{ marginLeft: "1em" }}>About</li>
        <li style={{ marginLeft: "2em" }}>Testimonials</li>
        <li style={{ marginLeft: "5.3em" }}>Contact</li>
      </ul>
      <div style={menuBackground}></div>
    </div>
  );
}
