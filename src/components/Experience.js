import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      step: "01",
      position: "Bí thư Đoàn trường",
      organization: "THPT Lê Quý Đôn - Đống Đa",
      period: "2019 - 2022",
      description:
        "Lãnh đạo và tổ chức các hoạt động Đoàn, quản lý đội ngũ hơn 20 thành viên.",
    },
    {
      step: "02",
      position: "Sinh viên",
      organization: "Đại học Kinh tế Quốc dân",
      period: "2022 - Hiện tại",
      description:
        "Sinh viên chuyên ngành Kinh tế quốc tế, tích cực tham gia các hoạt động nghiên cứu khoa học và câu lạc bộ sinh viên.",
    },
    {
      step: "03",
      position: "Trợ giảng",
      organization: "Trung tâm IELTS - ODIN Education",
      period: "2022 - Hiện tại",
      description:
        "Hỗ trợ giảng dạy và hướng dẫn học viên trong các khóa học IELTS, giúp cải thiện kỹ năng ngôn ngữ và chiến lược làm bài.",
    },
    {
      step: "04",
      position: "Nghiên cứu sinh",
      organization: "Đại học Kinh tế Quốc dân",
      period: "2022 - Hiện tại",
      description:
        "Tham gia 10+ dự án nghiên cứu, học phương pháp phân tích dữ liệu và thống kê.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="section-title">Kinh nghiệm làm việc</h2>
          <p className="section-subtitle">
            Hành trình phát triển nghề nghiệp trong lĩnh vực nghiên cứu khoa học
          </p>
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
