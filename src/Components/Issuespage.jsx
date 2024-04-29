import { useEffect } from "react";
import arrow from "../icon/Icon (2).png";
import arrow2 from "../icon/arrow-circle-right.png";
import ScrollReveal from "scrollreveal";

const Issuespage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "200px",
      duration: 2700,
      reset: false,
    });
    sr.reveal(".top-text", { origin: "left", delay: 350 });
    sr.reveal(".flexbox", { origin: "right", delay: 350 });
  }, []);
  return (
    <>
      <section className="third-div" id="gallery">
        <div className="top-text">
          <h1>Issues</h1>
          <p>
            We recognize the centrality of just and good governance in community
            development, poverty <br /> eradication and improvement of people’s
            welfare.
          </p>
        </div>
        <div className="flexbox">
          <div className="flex1">
            <div>
              <h3 className="flex1-h1">Health Facilities</h3>
              <p>
                We have provided PHCs in 6 rural <br /> communities. Government
                has <br />
                complimented our efforts by <br /> supporting some of these
                health <br />
                facilities with water borehole, <br /> power supply and the
                right caliber <br />
                of staff.
              </p>
              <a href="#">
                <button className="flexbox-btn">
                  <img src={arrow} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex1 second">
            <div>
              <h3>
                WASH (Water supply, <br /> Sanitation and <br /> Hygiene)
              </h3>
              <p>
                In AHDC we believe that good <br /> sanitary and hygiene
                practices <br /> are key enablers of good health. <br /> But the
                two would be difficult <br /> without adequate and timely <br />{" "}
                supply of water.
              </p>
              <a href="#">
                <button className="flexbox-btn">
                  <img src={arrow} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex1" id="third-flex">
            <div>
              <h3 className="flex1-h3" id="third-h">
                Education
              </h3>
              <p id="third-p">
                It is our belief that quality <br /> education can help to level{" "}
                <br /> economic and social <br /> inequalities, promote the{" "}
                <br /> social mobility of people and <br /> people’s access to
                better <br /> levels of employment, <br /> amongst others.
              </p>
              <a href="#">
                <button className="flexbox-btn" id="arrow2">
                  <img src={arrow2} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex1 last">
            <div>
              <h3 className="flex1-h4">
                Just & Good <br /> Governance
              </h3>
              <p>
                We recognize the centrality of <br /> just and good governance
                in <br /> community development, <br /> poverty eradication and{" "}
                <br /> improvement of people’s <br /> welfare.
              </p>
              <a href="#">
                <button className="flexbox-btn">
                  <img src={arrow} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Issuespage;
