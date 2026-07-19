import React from "react";
import "./Experience.css";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = t("experience.items", { returnObjects: true });

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <SectionHeader
          number="04"
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

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
