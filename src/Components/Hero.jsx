import { useEffect } from "react";
import Navbar from "./Navbar";
import heroimage from "../icon/image 3.png";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    const sr =  ScrollReveal ({
      distance: '150px',
      duration: 2700,
      reset: true
    })
    sr.reveal(".header-left-image", { origin: "left", delay: 350 });
    sr.reveal(".header-right-text", { origin: "right", delay: 350 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="herodiv" id="home">
        <div className="header-left-image">
          <img className="left-image" src={heroimage} alt="loading..." />
        </div>
        <div className="header-right-text">
          <div className="sub-right-div">
            <div className="heading">
              <h1>
                African Human <br />
                <span className="yellow">Development</span>
                <br />
                Centre (AHDC)
              </h1>
            </div>
            <div className="subtitle">
              <p>
                Research and Development Organization working for a <br />{" "}
                society free of poverty, marginalization and exclusion.
              </p>
            </div>
            <div className="right-button-div">
              <div className="div1">
                <a href="#">
                <button className="hero-button1">Donate Now</button>
                </a>
              </div>
              <div className="div2">
                <a href="#">
                <button className="hero-button2">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
