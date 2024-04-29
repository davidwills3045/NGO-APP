import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import slide1 from "../icon/Group 14.png";
import slide2 from "../icon/Group 17.png";
import slide3 from "../icon/Group 16.png";
import slide4 from "../icon/Group 18.png";
import slide5 from "../icon/Group 19.png";
import slide6 from "../icon/Group 20.png";
import ScrollReveal from "scrollreveal";

const Events = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "slide",
    rewind: false,
    keyboard: "global",
    pagination: false,
    padding: "2rem",
    // gap: "1rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
    onSlideEnd: (splide) => { 
      if (splide.Index === splide.length - 1) {
        console.log("Reached last slide!");
      }
    },
  };
 
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "200px",
      duration: 2700,
      reset: false,
    });
    sr.reveal(".event-h1", { origin: "top", delay: 350 });
    sr.reveal(".carosel-div", { origin: "bottom", delay: 350 });
  }, []);
  return (
    <>
      <section className="event-div">
        <div className="event-h1">
          <h1>Events and News</h1>
        </div>
        <div className="carosel-div">
          <div className="carosel-div2">
            <Splide options={splideOptions}>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide1} alt="Image 1" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide2} alt="Image 2" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide3} alt="Image 3" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide4} alt="Image 4" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide5} alt="Image 5" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="slide-div">
                  <a href="#">
                    <img src={slide6} alt="Image 6" className="slide-img" />
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
