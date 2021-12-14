import React, { useEffect, useState } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Works from "./components/pages/Works";
import Contact from "./components/pages/Contact";
import Game from "./components/pages/Game";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import countapi from "countapi-js";

function App() {
  const [visit, setVisit] = useState("");
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
    countapi.visits("global").then((result) => {
      setVisit(result.value);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Game />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact visitors={visit} />
    </div>
  );
}

export default App;
