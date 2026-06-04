import "./About.css";
import OptimizedImage from "./OptimizedImage";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame">
            {/* Decorative elements */}
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
            <div className="decorative-dot dot-3"></div>

            {/* Your actual photo */}
            <OptimizedImage
              src="/dieuanhcv/assets/images/about/about.jpg"
              alt="About Dieuanh"
              className="about-photo"
              loading="lazy"
            />
            {/* Decorative border accent */}
            <div className="border-accent"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="about-text">{t("about.paragraph1")}</p>
          <p className="about-text">{t("about.paragraph2")}</p>
          <p className="about-text">{t("about.paragraph3")}</p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">{t("about.stats.experience")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t("about.stats.projects")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t("about.stats.papers")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
