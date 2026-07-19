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

        <div className="hero-illustration">
          <div className="image-wrapper">
            {/* Ghosted scatter plot — a quiet nod to econometrics */}
            <svg
              className="hero-plot"
              viewBox="0 0 440 440"
              aria-hidden="true"
              focusable="false"
            >
              <g className="hero-plot-axes">
                <line x1="30" y1="410" x2="430" y2="410" />
                <line x1="30" y1="410" x2="30" y2="10" />
                <line x1="128" y1="406" x2="128" y2="414" />
                <line x1="226" y1="406" x2="226" y2="414" />
                <line x1="324" y1="406" x2="324" y2="414" />
                <line x1="26" y1="312" x2="34" y2="312" />
                <line x1="26" y1="214" x2="34" y2="214" />
                <line x1="26" y1="116" x2="34" y2="116" />
              </g>
              <path
                className="hero-plot-fit"
                d="M55 385 C 170 330, 260 195, 415 45"
              />
              <g className="hero-plot-points">
                <circle cx="70" cy="368" r="3.5" />
                <circle cx="105" cy="352" r="3.5" />
                <circle cx="140" cy="330" r="3.5" />
                <circle cx="172" cy="300" r="3.5" />
                <circle cx="198" cy="312" r="3.5" />
                <circle cx="232" cy="255" r="3.5" />
                <circle cx="262" cy="230" r="3.5" />
                <circle cx="290" cy="243" r="3.5" />
                <circle cx="318" cy="180" r="3.5" />
                <circle cx="352" cy="140" r="3.5" />
                <circle cx="382" cy="118" r="3.5" />
                <circle cx="405" cy="72" r="3.5" />
              </g>
            </svg>

            {/* Above the fold: load eagerly, it is the LCP element */}
            <img
              src="/dieuanhcv/assets/images/hero/profile-2.png"
              alt="Bùi Diệu Anh"
              className="profile-image"
              width="450"
              height="450"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
