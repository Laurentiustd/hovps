import "../App.css";

function App() {
  return (
    <div className="container-companies" >
      <h1>Companies That Have worked With Us : </h1>
      <div className="companies-logo">
        <div >
          <img src={require("../shopee.png")} className="shopee-img"/>
        </div>
        <div >
          <img src={require("../gojek.png")}  className="gojek-img"/>
        </div>
        <div >
          <img src={require("../tokped.png")}  className="tokped-img"/>
        </div>
        <div >
          <img src={require("../pertamina.png")} className="pertamina"/>
        </div>
        <div >
          <img src={require("../unilever.png")}  className="unilever-img"/>
        </div>
      </div>
    </div>
  );
}

export default App;
