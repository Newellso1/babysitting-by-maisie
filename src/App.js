import { ParallaxProvider } from "react-scroll-parallax";
import Logo from "./Logo.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";

function App() {
  return (
    <ParallaxProvider>
      <div className="landing-page">
        <Logo />
      </div>
      <About />
      <Testimonials />
    </ParallaxProvider>
  );
}

export default App;
