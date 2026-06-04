import React from "react";
import "./Experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = t("experience.items", { returnObjects: true });

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-step">{exp.step}</div>
              <div className="timeline-content">
                <h3 className="timeline-position">{exp.position}</h3>
                <p className="timeline-org">{exp.organization}</p>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
