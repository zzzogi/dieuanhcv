import React from "react";
import "./Skills.css";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";
import useReveal from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const revealRef = useReveal();
  const skillsData = [
    {
      title: t("skills.research.title"),
      description: t("skills.research.description"),
      icon: "flask",
    },
    {
      title: t("skills.data.title"),
      description: t("skills.data.description"),
      icon: "chart",
    },
    {
      title: t("skills.language.title"),
      description: t("skills.language.description"),
      icon: "globe",
    },
    {
      title: t("skills.writing.title"),
      description: t("skills.writing.description"),
      icon: "pen",
    },
    {
      title: t("skills.management.title"),
      description: t("skills.management.description"),
      icon: "clipboard",
    },
    {
      title: t("skills.communication.title"),
      description: t("skills.communication.description"),
      icon: "presentation",
    },
  ];

  return (
    <section id="skills" className="skills" ref={revealRef}>
      <div className="skills-container">
        <SectionHeader
          number="02"
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <Icon name={skill.icon} />
              </div>
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
