import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Logo from "./Logo.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import NavButton from "./NavButton.js";

function App() {
  return (
    <ParallaxProvider>
      <NavButton />
      <div className="landing-page">
        <Logo />
      </div>
      <About />
      <Testimonials />
    </ParallaxProvider>
  );
}

export default App;
