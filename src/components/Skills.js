import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skillsData = [
    {
      title: `${t("skills.research.title")}`,
      description: `${t("skills.research.description")}`,
      icon: "🔬",
    },
    {
      title: `${t("skills.data.title")}`,
      description: `${t("skills.data.description")}`,
      icon: "📊",
    },
    {
      title: `${t("skills.language.title")}`,
      description: `${t("skills.language.description")}`,
      icon: "🌍",
    },
    {
      title: `${t("skills.writing.title")}`,
      description: `${t("skills.writing.description")}`,
      icon: "📝",
    },
    {
      title: `${t("skills.management.title")}`,
      description: `${t("skills.management.description")}`,
      icon: "📋",
    },
    {
      title: `${t("skills.communication.title")}`,
      description: `${t("skills.communication.description")}`,
      icon: "🎤",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
