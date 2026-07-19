import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
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
            {t("hero.title1")}
            <br />
            <span className="highlight">{t("hero.title2")}</span>
          </h1>
          <p className="hero-description">{t("hero.description")}</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              {t("hero.viewProjects")}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("about")}
            >
              {t("hero.learnMore")}
            </button>
          </div>

          <p className="hero-stats">
            <span className="hero-stat">
              <strong>3+</strong> {t("about.stats.experience")}
            </span>
            <span className="hero-stat-sep" aria-hidden="true">
              ·
            </span>
            <span className="hero-stat">
              <strong>10+</strong> {t("about.stats.projects")}
            </span>
            <span className="hero-stat-sep" aria-hidden="true">
              ·
            </span>
            <span className="hero-stat">
              <strong>8</strong> {t("about.stats.papers")}
            </span>
          </p>
        </div>

        {/* The portrait stands in front of a green panel that bleeds off the
            viewport edge; her feet rest on the hero's baseline rule and her
            head breaks the panel's top edge. */}
        <div className="hero-stage">
          <div className="hero-panel" aria-hidden="true"></div>
          <img
            src="/dieuanhcv/assets/images/hero/profile-2.png"
            alt="Bùi Diệu Anh"
            className="hero-portrait"
            width="901"
            height="1353"
            fetchPriority="high"
          />
          <p className="hero-portrait-caption">{t("hero.portraitCaption")}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
