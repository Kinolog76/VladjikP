import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Works from "./components/works";
import Experience from "./components/experience";
import ParticleBgPortfolio from "./components/ParticleBgPortfolio";
import { useEffect, useState } from "react";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <div style={{ position: "relative" }} className="works-container">
        <Works />
        <ParticleBgPortfolio />
      </div>
      <div className="contact-btn-container">
        <a target="_blank" href="https://www.linkedin.com/in/vladislavpashora/" className="contact-btn">
          Contact me
        </a>
      </div>
      {showScroll && (
        <span className="scroll-to-top" onClick={scrollToTop} style={{ cursor: "pointer" }}>
          ↑
        </span>
      )}
    </>
  );
}

export default App;
