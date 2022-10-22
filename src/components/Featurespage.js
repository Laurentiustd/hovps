import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function App() {
  return (
    <div className="container-featurespage">
      <Navbar />
      <div className="featurespage-title" style={{padding:"2em"}}>
        <h1 style={{fontSize:"3em"}}>Features</h1>
      </div>
      <div className="featurespage-card" style={{marginBottom:"5em"}}>
        <div className="feature 1">
          <h2>Full Suites of Tools</h2>
          <p style={{marginTop:"5em"}}>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 2">
          <h2>VPS Control Panel</h2>
          <p style={{marginTop:"5em"}}>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 3">
          <h2>Easy to Setup and Manage</h2>
          <p style={{marginTop:"5em"}}>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 4">
          <h2>100% Free Trial</h2>
          <p style={{marginTop:"5em"}}>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 5">
          <h2>Your Privacy is our goal!</h2>
          <p style={{marginTop:"5em"}}>
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
