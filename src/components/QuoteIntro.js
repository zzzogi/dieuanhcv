import { useState, useEffect } from "react";
import "./QuoteIntro.css";

const QuoteIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`quote-intro ${!isVisible ? "fade-out" : ""}`}>
      <div className="quote-content">
        <p className="quote-text">
          "Science is not only a disciple of reason but also one of romance and
          passion."
        </p>
        <p className="quote-author">— Stephen Hawking</p>
      </div>
    </div>
  );
};

export default QuoteIntro;
