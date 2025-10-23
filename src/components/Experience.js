import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      step: "01",
      position: "Nghiên cứu viên chính",
      organization: "Viện Nghiên cứu Khoa học và Công nghệ",
      period: "2022 - Hiện tại",
      description:
        "Dẫn dắt các dự án nghiên cứu về Machine Learning và Data Science, quản lý đội ngũ 5 người, công bố 6 bài báo quốc tế.",
    },
    {
      step: "02",
      position: "Nghiên cứu viên",
      organization: "Trung tâm Đổi mới Sáng tạo",
      period: "2020 - 2022",
      description:
        "Thực hiện nghiên cứu độc lập và hợp tác, tham gia 8 dự án, phát triển thuật toán phân tích dữ liệu y tế.",
    },
    {
      step: "03",
      position: "Trợ lý Nghiên cứu",
      organization: "Đại học Quốc gia - Khoa Khoa học",
      period: "2018 - 2020",
      description:
        "Hỗ trợ các dự án nghiên cứu, thu thập và xử lý dữ liệu, viết báo cáo khoa học và trình bày tại hội thảo.",
    },
    {
      step: "04",
      position: "Thực tập sinh Nghiên cứu",
      organization: "Phòng thí nghiệm Sinh học Tính toán",
      period: "2017 - 2018",
      description:
        "Tham gia dự án nghiên cứu về genomics, học phương pháp phân tích dữ liệu và kỹ thuật thí nghiệm.",
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
