import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="herodiv" id="home">
        <div className="header-left-image">
          <img
            className="left-image"
            src="https://i.postimg.cc/J0RXMKgb/image-3.png"
            alt="loading..."
          />
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
                Research and Development Organization working for a <br /> society free
                of poverty, marginalization and exclusion.
              </p>
            </div>
            <div className="right-button-div">
              <div className="div1">
                <button className="hero-button1">Donate Now</button>
              </div>
              <div className="div2">
                <button className="hero-button2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
