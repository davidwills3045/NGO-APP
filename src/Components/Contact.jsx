// import React from 'react'
import logo from "../icon/Frame 72.png";
import facebook from "../icon/facebook.png";
import twitter from "../icon/twitter.png";
import linkin from "../icon/linkedin.png";

const Contact = () => {
  return (
    <>
      <footer>
        <div className="foot-logo">
          <img src={logo} alt="loading..." className="log" />
        </div>

        <div className="info">
          <p>Blogs</p>
          <p>News Centre</p>
          <p>Publications</p>
          <p>On-going Projects</p>
        </div>

        <div className="info2">
          <h5>GET INVOLVED</h5>
          <p>Careers</p>
          <p>
            Contact us: &nbsp;
            <a href="mailto:ahdcnig@yahho.com" className="a">
              ahdcnig@yahho.com
            </a>
          </p>
          <p>
            <a href="www.ahdcnigeria.com" className="a">
              www.ahdcnigeria_com
            </a>
            ;&nbsp; +234(0)8033564817
          </p>
          <div className="socials">
            <a href="#">
              <img src={facebook} alt="loading..." />
            </a>
            <a href="#">
              <img src={linkin} alt="loading..." />
            </a>
            <a href="#">
              <img src={twitter} alt="loading..." />
            </a>
          </div>
        </div>

        <div className="info3">
          <p>
            <strong>Donate</strong>: You can support our <br /> work through
            donation or <br /> partnership/collaboration with us
          </p>
          <div className="foot-b-div">
            <a href="#">
              <button className="foot-btn">Donate</button>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
