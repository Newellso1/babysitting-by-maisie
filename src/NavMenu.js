import { Link } from "react-scroll";

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

  const handleClose = () => setMenuButton((open) => !open);

  return (
    <div>
      <ul style={menuStyle}>
        <li>
          <Link to="Home" smooth duration={500} onClick={handleClose}>
            home
          </Link>
        </li>
        <li style={{ marginLeft: "1em" }}>
          <Link to="About" smooth duration={500} onClick={handleClose}>
            about
          </Link>
        </li>
        <li style={{ marginLeft: "2em" }}>
          <Link to="Testimonials" smooth duration={500} onClick={handleClose}>
            testimonials
          </Link>
        </li>
        <li style={{ marginLeft: "5.3em" }}>
          <Link to="Contact" smooth duration={500} onClick={handleClose}>
            contact
          </Link>
        </li>
      </ul>
      <div style={menuBackground}></div>
    </div>
  );
}
