import {useEffect} from 'react'
import Lightbox from '../icon/Lightbox.png'
import ScrollReveal from "scrollreveal";

const Missionpage = () => {
  useEffect(() => {
    const sr =  ScrollReveal ({
      distance: '180px',
      duration: 2700,
      reset: false,
    })
    sr.reveal(".mission-div", { origin: "left", delay: 350 });
    sr.reveal(".mission-img-div", { origin: "right", delay: 350 });
  }, []);
  return (
    <>
      <section className="mission" id="blog">
        <div className="mission-div">
          <h1>Our Mission</h1>
          <p>
            Our Mission is to promote social, <br /> economic and political development
            of <br /> women, children and people with <br /> disabilities through advocacy,
            capacity <br /> building and model service delivery
          </p>
        </div>
        <div className="mission-img-div">
            <img src={Lightbox} alt="" className="mission-image"/>
        </div>
      </section>
    </>
  );
};

export default Missionpage;
