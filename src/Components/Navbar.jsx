import { useEffect, useState } from "react";
import DonateModal from "./Donatemodal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  // State to manage the visibility of the menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Function to hide the menu
  const linkAction = () => {
    setIsMenuVisible(false);
  };

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.add("active");
        } else {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollActive);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          {/* <div className="foot-logo">
            <img src={logo} alt="logo-AHDC-African-Developement" className="log2" />
          </div> */}
          <div className="logo-div">
            <img
              src="https://i.postimg.cc/SKZVPQNR/logo-AHDC-African-Developement.jpg"
              alt="logo-AHDC-African-Developement"
              className="nav__logo"
            />
          </div>

          <div
            className={`nav__menu ${isMenuVisible ? "show" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link active"
                  onClick={linkAction}
                >
                  HOME
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={linkAction}>
                  ABOUT US
                </a>
              </li>
              <li className="nav__item">
                <a href="#gallery" className="nav__link" onClick={linkAction}>
                  ISSUES
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link" onClick={linkAction}>
                  OUR MISSION
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={linkAction}>
                  CONTACT US
                </a>
              </li>

              <div className="donate-btn">
                <button
                  onClick={handleOpenModal}
                  className="top-btn"
                  id="donate-menu"
                >
                  Donate Now
                </button>
                {isOpen && (
                  <DonateModal isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
              </div>
            </ul>
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleMenuToggle}
          >
            <i className="bx bx-menu"></i>
          </div>

          <div className="donate-btn2">
            <button onClick={handleOpenModal} className="top-btn">
              Donate Now
            </button>
            {isOpen && <DonateModal isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
