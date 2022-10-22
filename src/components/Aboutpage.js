import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function App() {
  return (
    <div className="container-aboutpage">
      <Navbar />
      <div className="aboutpage-title" style={{padding:"2em"}}>
        <h1 style={{fontSize:"3em"}}>About Us!</h1>
      </div>
      <div className="aboutpage-card" style={{marginBottom:"5em"}}>
        <div className="feature 1">
          <h2>2019</h2>
          <p >
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 2">
          <h2>2020</h2>
          <p >
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 3">
          <h2>2021</h2>
          <p >
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 4">
          <h2>2022</h2>
          <p >
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
