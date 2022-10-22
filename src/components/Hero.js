import "../App.css";

function App() {
  return (
    <div className="container-hero" >
      <div className="hero-title">
        <h1 style={{fontSize:"3em"}}>Fully Managed Cloud & Web Hosting</h1>
        <p style={{fontSize:"1em"}}>
          Dedicated resource, full root access & easy scaling, it’s the private
          virtual server that you have been looking for!
        </p>
        <button style={{padding:"1em", width:"10em", borderRadius:"10px", backgroundColor:"black", color:"white", cursor:"pointer", margin:"2em"}}>Login</button>
      </div>
      <div className="hero-img">
        <img src={require("../Polygon.png")}/>
      </div>
    </div>
  );
}

export default App;
