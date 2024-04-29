import "./App.css";
import "./Nav.css";
import "./Hero.css";
import "./Secondsection.css";
import "./Issuespage.css";
import "./Mission.css";
import "./Values.css";
import './Event.css';
import './Partners.css';
import './Contact.css';
import './Donatemodal.css'
import Hero from "./Components/Hero";
import Secondsection from "./Components/Secondsection";
import Issuespage from "./Components/Issuespage";
import Missionpage from "./Components/Missionpage";
import Values from "./Components/Values";
import Events from "./Components/Events";
import Partners from "./Components/Partners";
import Contact from "./Components/Contact";
import DonateModal from "./Components/Donatemodal";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <DonateModal/>
        <Secondsection />
        <Issuespage />
        <Missionpage />
        <Values />
        <Events/>
        <Partners/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
