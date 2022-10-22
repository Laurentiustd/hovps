import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import { Link } from "react-router-dom";

function App() {
  const navRef = useRef();

  function handleClick(){
    navRef.current.classList.toggle("slide")
  }
  return (
    <div className="container-navbar">
      <div className="navbar-logo">
        <p style={{ fontSize: "36px" }}>HoVPS</p>
      </div>
      <div className="navbar-link">
        <ul ref={navRef}>
          <li>
            <Link to="/hovps">Home</Link>
          </li>
          <li>
            <Link to="/aboutpage">About Us</Link>
          </li>
          <li>
            <Link to="/featurespage">Features</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon icon={faBars} className="fa-bars" onClick={()=>handleClick()}/>
    </div>
  );
}

export default App;
