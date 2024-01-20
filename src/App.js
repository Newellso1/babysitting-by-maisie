import Page from "./Page.js";
import Logo from "./Logo.js";
import About from "./About.js";

function App() {
  return (
    <div>
      <div className="landing-page">
        <Logo />
      </div>
      <About />
    </div>
  );
}

export default App;
