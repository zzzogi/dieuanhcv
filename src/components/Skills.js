import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Phương pháp nghiên cứu",
      description:
        "Thiết kế nghiên cứu, phân tích định tính và định lượng, đánh giá văn bản khoa học",
      icon: "🔬",
    },
    {
      title: "Phân tích dữ liệu",
      description:
        "Statistical analysis, Machine Learning, Data Visualization với Python, R, SPSS",
      icon: "📊",
    },
    {
      title: "Ngoại ngữ",
      description: "Đọc tài liệu và viết báo cáo bằng tiếng Anh",
      icon: "🌍",
    },
    {
      title: "Viết bài khoa học",
      description:
        "Biên soạn bài báo, báo cáo nghiên cứu, và tài liệu học thuật tiếng Anh, Việt",
      icon: "📝",
    },
    {
      title: "Quản lý dự án",
      description:
        "Lập kế hoạch, điều phối nhóm nghiên cứu, quản lý thời gian và nguồn lực",
      icon: "📋",
    },
    {
      title: "Trình bày & Giao tiếp",
      description:
        "Thuyết trình khoa học, hội thảo quốc tế, workshop và đào tạo",
      icon: "🎤",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Sở trường</h2>
          <p className="section-subtitle">
            Những kỹ năng và chuyên môn mà tôi đã phát triển qua quá trình
            nghiên cứu
          </p>
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
