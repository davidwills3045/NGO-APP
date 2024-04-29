import {useEffect} from 'react'
import grid1 from '../icon/Rectangle 10.png'
import grid2 from '../icon/Rectangle 28.png'
import grid3 from '../icon/Rectangle 9.png'
import ScrollReveal from "scrollreveal";


const Secondsection = () => {
  useEffect(() => {
    const sr =  ScrollReveal ({
      distance: '200px',
      duration: 2700,
      reset: false,
    })
    sr.reveal(".masterdiv1", { origin: "top", delay: 350 });
    sr.reveal(".grid-images", { origin: "bottom", delay: 350 });
  }, []);
  return (
    <>
      <section className="secondsec-div" id="about">
        <div className="masterdiv1">
          <div className="subdiv1">
            <h1>Who we are?</h1>
            <p>
              African Human Development Centre <br /> (AHDC) is a
              non-governmental, research <br /> and development <br />{" "}
              organization working for a society free of <br /> poverty,
              marginalization and exclusion.
            </p>
          </div>
          <div className="subdiv2">
            <h1>What we do?</h1>
            <p>
              In AHDC, we believe that exclusion is a major <br /> driver of
              conflict and that it would be difficult to <br /> achieve
              sustainable development when the social <br /> and economic
              conditions of everyone in the <br /> society are not improved and
              sections of the <br /> society remainsmarginalized. This
              understanding
            </p>
          </div>
        </div>
        <div className="grid-images">
          <div className="dispaly-column">
            <div>
              <img
                src={grid1}
                alt="loding"
                className="main-image1"
              />
            </div>
            <div>
              <img
                src={grid2}
                alt="loading"
                className="main-image1"
              />
            </div>
          </div>
          <div className="image3">
            <img
              src={grid3}
              alt="loading"
              className="main-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Secondsection;
