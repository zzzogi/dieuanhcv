import "./About.css";
import OptimizedImage from "./OptimizedImage";
import SectionHeader from "./SectionHeader";
import useReveal from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const revealRef = useReveal();
  return (
    <section id="about" className="about" ref={revealRef}>
      <div className="about-container">
        <figure className="about-image">
          <div className="image-frame">
            <OptimizedImage
              src="/dieuanhcv/assets/images/about/about.jpg"
              alt="Bùi Diệu Anh"
              className="about-photo"
              loading="lazy"
            />
            <div className="border-accent" aria-hidden="true"></div>
          </div>
          <figcaption className="figure-caption">
            {t("about.photoCaption")}
          </figcaption>
        </figure>

        <div className="about-content">
          <SectionHeader number="01" title={t("about.title")} />
          <p className="about-text">{t("about.paragraph1")}</p>
          <p className="about-text">{t("about.paragraph2")}</p>
          <p className="about-text">{t("about.paragraph3")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
