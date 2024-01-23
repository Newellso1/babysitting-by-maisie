import { useState } from "react";
import Logo from "./Logo.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import NavButton from "./NavButton.js";
import NavMenu from "./NavMenu.js";

function App() {
  const [menuButton, setMenuButton] = useState(false);
  return (
    <div>
      <NavButton menuButton={menuButton} setMenuButton={setMenuButton} />
      <NavMenu menuButton={menuButton} setMenuButton={setMenuButton} />
      <div className="landing-page">
        <Logo />
      </div>
      <About />
      <Testimonials />
    </div>
  );
}

export default App;
