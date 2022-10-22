import "../App.css";
function App() {
  return (
    <div className="container-features" >
      <div className="feature-title" style={{display:"flex", justifyContent:"end"}}>
        <h1 className="feature-title-h1" >Features</h1>
      </div>
      <div className="feature-highlight" >
        <div
          className="feature 1"
          style={{
            alignSelf: "flex-start"
          }}
         >
          <h2>Full Suites of Tools</h2>
          <p>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div className="feature 2">
          <h2>VPS Control Panel</h2>
          <p>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
        <div
          className="feature 3"
          style={{ alignSelf: "flex-end"}}
        >
          <h2>Easy to Setup and Manage</h2>
          <p>
            enjoy site template with powerfull script installer, site
            development tools& much more!
          </p>
        </div>
      </div>
      <div className="feature-image" style={{alignSelf:"end"}}>
        <img src={require("../Polygon2.png")} />
      </div>
    </div>
  );
}

export default App;
