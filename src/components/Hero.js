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

  // Anchor points as fractions of the portrait's own box (901x1353),
  // so each leader line lands on the same photo feature at every size:
  // her shoulder, the trophy's star, the certificate's frame.
  const annotations = [
    { ax: 0.7, ay: 0.23, text: t("hero.anno.name") },
    { ax: 0.18, ay: 0.03, text: t("hero.anno.trophy") },
    { ax: 0.83, ay: 0.48, text: t("hero.anno.certificate") },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-masthead">
        <span className="masthead-title">Tập san Diệu Anh</span>
        <span className="masthead-meta">Vol. 1 · Hà Nội · 2026</span>
      </div>

      {/* The plate: portrait as Figure 0, annotated like a specimen */}
      <div className="hero-plate">
        <img
          src="/dieuanhcv/assets/images/hero/profile-2.png"
          alt="Bùi Diệu Anh"
          className="hero-portrait"
          width="901"
          height="1353"
          fetchPriority="high"
        />
        {annotations.map((anno, i) => (
          <div
            key={i}
            className="annotation"
            style={{ "--ax": anno.ax, "--ay": anno.ay }}
          >
            <span className="anno-dot" aria-hidden="true"></span>
            <span className="anno-line" aria-hidden="true"></span>
            <p className="anno-label">{anno.text}</p>
          </div>
        ))}
      </div>

      {/* Baseline: her feet rest on this rule; the reading matter sits under it */}
      <div className="hero-below">
        <div className="hero-reading">
          <h1 className="hero-title">
            {t("hero.title1")}{" "}
            <span className="highlight">{t("hero.title2")}</span>
          </h1>
          <p className="hero-description">{t("hero.description")}</p>
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
      </div>

      <div className="hero-footline">
        <span className="hero-figcaption">{t("hero.figCaption")}</span>
        <span className="hero-pageno">{t("hero.pageNumber")}</span>
      </div>
    </section>
  );
};

export default Hero;
