import "./App.css";
import "./Nav.css";
import "./Hero.css";
import "./Secondsection.css";
import "./Issuespage.css";
import "./Mission.css";
import "./Values.css";
import './Event.css';
import './Partners.css'
import './Contact.css'
import Hero from "./Components/Hero";
import Secondsection from "./Components/Secondsection";
import Issuespage from "./Components/Issuespage";
import Missionpage from "./Components/Missionpage";
import Values from "./Components/Values";
import Events from "./Components/Events";
import Partners from "./Components/Partners";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
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
