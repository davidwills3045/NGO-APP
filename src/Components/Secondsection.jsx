// import React from 'react'
const Secondsection = () => {
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
                src="https://i.postimg.cc/kGyY8fFw/Rectangle-10.png"
                alt="loding"
                className="main-image1"
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/hGHYqJt8/Rectangle-28.png"
                alt="loading"
                className="main-image1"
              />
            </div>
          </div>
          <div className="image3">
            <img
              src="https://i.postimg.cc/k5VHZNqX/Rectangle-9.png"
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
