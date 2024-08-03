import Workflow from "./components/Workflow";
import Features from "./components/Features";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testinomial from "./components/Testinomial";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Element name="home">
          <Homepage />
        </Element>
        <Element name="feature">
          <Features />
        </Element>
        <Element name="workflow">
          <Workflow />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="testinomial">
          <Testinomial />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;
