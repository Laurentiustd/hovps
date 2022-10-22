import "../App.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Features from "./Features.js";
import Contact from "./Contact.js"
import Companies from "./Companies.js"
import Footer from "./Footer.js"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact/>
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
