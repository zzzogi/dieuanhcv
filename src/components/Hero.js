import React from "react";
import "./Hero.css";
// If using src/dieuanhcv/assets folder, uncomment this:
// import profileImage from '../dieuanhcv/assets/profile.png';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Khám phá khoa học,
            <br />
            <span className="highlight">Tạo nên giá trị</span>
          </h1>
          <p className="hero-description">
            Nhà nghiên cứu khoa học với niềm đam mê khám phá và phát triển các
            giải pháp sáng tạo dựa trên dữ liệu và phương pháp khoa học.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              Xem dự án
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("about")}
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="image-wrapper">
            {/* Decorative circles behind image */}
            <div className="circle-bg circle-1"></div>
            <div className="circle-bg circle-2"></div>
            <div className="circle-bg circle-3"></div>

            {/* Your PNG image */}
            <img
              src="/dieuanhcv/assets/images/hero/profile.png"
              alt="Dieuanh Profile"
              className="profile-image"
            />
            {/* If using src/dieuanhcv/assets, use this instead:
            <img 
              src={profileImage} 
              alt="Dieuanh Profile" 
              className="profile-image"
            />
            */}

            {/* Decorative elements */}
            <div className="decorative-element element-1"></div>
            <div className="decorative-element element-2"></div>
            <div className="decorative-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
