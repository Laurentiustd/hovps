import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function App() {
  return (
    <div className="container-contactpage">
      <Navbar />
      <div className="contactpage-title" style={{ padding: "3em" }}>
        <h1 style={{ fontSize: "3em" }}>Contact Us!</h1>
      </div>
      <div className="contactform-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.797637203596!2d106.8076519!3d-6.2374271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee6c7dae6bf8d947!2sDUCK%20DOWN%20BAR!5e0!3m2!1sid!2sid!4v1666017013299!5m2!1sid!2sid"
          width="800"
          height="650"
        />
        <div className="form-wrapper">
          <div className="form">
            <label for="email" className="name-label">
              Enter Your Name :
            </label><br />
            <input type="text" className="name" id="name" placeholder=" " />
            <br />
            <label for="email" className="email-label">
              Enter Your Email :
            </label><br />
            <input type="text" id="email" className="email" placeholder=" " />
            <br />
            <label for="email" className="number-label">
              Enter Your Number :
            </label><br />
            <input type="text" id="number" className="number" placeholder=" " />
            <br />
            <label for="message" className="message-label">
              Enter Your Message :
            </label><br />
            <textarea name="text1" id="text1" cols="50" rows="10" style={{marginTop:"1em"}}></textarea>
            <br />
            <button type="submit" id="sendButton" style={{width:"8em", margin:"3em"}}>
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
