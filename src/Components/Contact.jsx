import {useState} from 'react'
import DonateModal from "./Donatemodal";
import logo from "../icon/Frame 72.png";
import facebook from "../icon/facebook.png";
import twitter from "../icon/twitter.png";
import linkin from "../icon/linkedin.png";
import { MdPhone, MdEmail } from 'react-icons/md';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  return (
    <>
      <footer id="contact">
        <div className="foot-logo m">
          <img src={logo} alt="loading..." className="log" />
        </div>

        <div className="info m">
          <p>Blogs</p>
          <p>News Centre</p>
          <p>Publications</p>
          <p>On-going Projects</p>
        </div>

        <div className="info2 m">
          <h5>GET INVOLVED</h5>
          <p>Careers</p>
          <p>
            Contact us:&nbsp;&nbsp;<MdEmail/>&nbsp;
            <a href="mailto:ahdcnig@yahho.com" className="a">
              ahdcnig@yahho.com
            </a>
          </p>
          <p>
            physical address:
            Plot 15, Emmanuel Bassey <br /> Avenue, Shelter Afrique Extension, Off Oron <br /> Road Uyo, Akwa Ibom State, Nigeria.
          </p>
          <p>
          <MdPhone/> +234(0)8033564817
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

        <div className="info3 m">
          <p>
            <strong>Donate</strong>: You can support our <br /> work through
            donation or <br /> partnership/collaboration with us
          </p>
          <div className="foot-b-div">
            <button onClick={handleOpenModal} className="foot-btn">Donate</button>
            {isOpen && <DonateModal isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
