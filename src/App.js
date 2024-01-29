import { useState } from "react";
import Logo from "./Logo.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import Contact from "./Contact.js";
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
      <About id="About" />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
