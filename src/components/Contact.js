import "../App.css";

function App() {
  return (
    <div className="container-contact">
      <h1 style={{ fontSize: "2em" }}>Contact Us</h1>
      <p>
        Got a Project in mind? let us know by clicking the button here or
        contacting us through our social media, get to know more about us!
      </p>
      <button><a href="/contact" style={{textDecoration:"none", color:"inherit"}}>Lets Talk Our Project!</a></button>
    </div>
  );
}

export default App;
