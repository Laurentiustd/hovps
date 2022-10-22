import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function App() {
  return (
    <div className="container-footer">
      <div className="footer-top">
        <div className="footer-left">
          <h1>HoVPS</h1>
          <h3 style={{ fontSize: "1em" }}>hovps@companies.id</h3>
          <h3 style={{ fontSize: "1em" }}>+62-812-345-678</h3>
        </div>
        <div className="footer-right">
          <h2 style={{ fontSize: "2em" }}>Social Media</h2>
          <ul style={{ listStyleType: "none"}}>
            <li>
            <FontAwesomeIcon icon={faInstagram}/>
              <a href="https://www.instagram.com/" target={"_blank"} style={{marginLeft:".5em"}}>Instagram</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook}/>
              <a href="https://www.facebook.com/" target={"_blank"}  style={{marginLeft:".5em"}}>Facebook</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faLinkedin}/>
              <a href="https://www.linkedin.com/" target={"_blank"}  style={{marginLeft:".5em"}}>Linkdin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{marginTop:"5em"}}>
        <div style={{width:"20em", backgroundColor:"white", height:".1em"}}></div>
        <p >Copyright 2022 HoVPS, All right reserved</p>
        <div style={{width:"20em", backgroundColor:"white", height:".1em"}}></div>
      </div>
    </div>
  );
}

export default App;
