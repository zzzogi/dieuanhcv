import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteIntro from "./components/QuoteIntro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [showQuote, setShowQuote] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Disable scroll khi quote đang hiển thị
    if (showQuote) {
      document.body.style.overflow = "hidden";
    }

    // Fade out quote sau 3 giây
    const fadeOutTimer = setTimeout(() => {
      setShowQuote(false);
    }, 3000);

    // Fade in content sau 3.5 giây và enable scroll
    const fadeInTimer = setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = "auto";
    }, 3500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(fadeInTimer);
      document.body.style.overflow = "auto";
    };
  }, [showQuote]);

  return (
    <div className="App">
      {showQuote && <QuoteIntro />}
      <div className={`main-content ${showContent ? "fade-in" : "hidden"}`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
