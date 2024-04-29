import {useEffect} from 'react'
import part1 from "../icon/Frame 83.png";
import part2 from "../icon/action-aid2.png";
import part3 from "../icon/Frame 76.png";
import part4 from "../icon/Frame 75.png";
import part5 from "../icon/Frame 82.png";
import part6 from "../icon/Frame 77.png";
import part7 from "../icon/Frame 81.png";
import ScrollReveal from 'scrollreveal';

const Partners = () => {
  useEffect(() => {
    const sr =  ScrollReveal ({
      distance: '200px',
      duration: 2700,
      reset: false,
    })
    sr.reveal(".partner-h1", { origin: "left", delay: 350 });
    sr.reveal(".partner-icon", { origin: "right", delay: 350 });
    sr.reveal(".part-text", { origin: "left", delay: 350 });

  }, []);
  return (
    <>
      <section className="partner" >
        <div className="partner-h1">
          <h1>Partners</h1>
        </div>
        <div className="partner-icon">
          <div>
            <img src={part1} alt="loading..." className="m1" />
          </div>
          <div className='co'>
            <img src={part2} alt="loading..." className="m1" id='action' />
          </div>
          <div>
            <img src={part3} alt="loading..." className="m1" />
          </div>
          <div>
            <img src={part4} alt="loading..." className="m1" />
          </div>
          <div>
            <img src={part5} alt="loading..." className="m1" />
          </div>
          <div>
            <img src={part6} alt="loading..." className="m1" />
          </div>
          <div>
            <img src={part7} alt="loading..." className="m1" />
          </div>
        </div>
        <div className="part-text">
          <p>
            We have a track record of sub-granting and managing cluster of civil
            society organizations to deliver on <br /> projects/programmes. We have
            successfully managed IbomWASH Cluster to deliver on USAID funded <br />
            “Akwa Ibom WASH Policy Cluster Project”, and Actionaid /Nigeria
            National Social Investment <br /> Project(NSIP) Third Party Monitoring
            Project.
          </p>
        </div>
      </section>
    </>
  );
};

export default Partners;
