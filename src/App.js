import React, { useEffect } from "react";
import i18n from "./i18n";
import "./App.css";
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
  useEffect(() => {
    // Keep <html lang> in sync with the chosen language
    document.documentElement.lang = i18n.language;
    const onLanguageChanged = (lng) => {
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", onLanguageChanged);
    return () => i18n.off("languageChanged", onLanguageChanged);
  }, []);

  useEffect(() => {
    // A citation for the curious
    console.log(
      "%cBùi, D. A. (2026). Tập san Diệu Anh, Vol. 1. Hà Nội: dieuanh.cv.",
      "font-family: Georgia, serif; font-style: italic; font-size: 12px; color: #0b6e5c;",
    );
  }, []);

  return (
    <div className="App">
      <div className={`main-content fade-in`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Gallery />
        <div className="end-ornament" aria-hidden="true">
          ∗ ∗ ∗
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
