import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal';

const Values = () => {
  useEffect(() => {
    const sr =  ScrollReveal ({
      distance: '250px',
      duration: 2700,
      reset: false,
    })
    sr.reveal(".value-text", { origin: "left", delay: 350 });
    sr.reveal(".value-flex", { origin: "right", delay: 350 });

  }, []);
  return (
    <>
      <section className="values">
        <div className="value-text">
          <h1>Our Values</h1>
          <p>We identify with these core values</p>
        </div>
        <div className="value-flex">
          <div className="value-flex1">
            <div>
              <h3>Transparency</h3>
              <p>
                We are open and <br /> accountable in all our <br /> dealings.
              </p>
            </div>
          </div>
          <div className="value-flex1" id='second-v'>
            <div>
              <h3 className="i">Integrity</h3>
              <p>
                We are honest and <br /> demonstrate strong moral <br />{" "}
                principles at all times.
              </p>
            </div>
          </div>
          <div className="value-flex1" id="e">
            <div>
              <h3 className="e">Equity</h3>
              <p>We are fair and impartial <br /> to all.</p>
            </div>
          </div>
          <div className="value-flex1 last-v">
            <div>
              <h3 className="d">Diligence</h3>
              <p>
                We are thorough and <br /> persistent in the delivery of <br />{" "}
                our objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
