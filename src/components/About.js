import "../App.css";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="container-about" >
      <h1 style={{fontSize:"2em"}}>About Us</h1>
      <p >
        a startup company that made from 2019, made from users to users, create
        with full of heart, we don’t need money, we just need your feedback to
        make our company great!
      </p>
      <button><Link to="/aboutpage" style={{textDecoration:"none", color:"inherit"}}>More About Us</Link></button>
    </div>
  );
}

export default App;
