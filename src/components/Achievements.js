import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const achievementsData = [
    {
      year: "2024",
      title: "Giải thưởng Nghiên cứu Xuất sắc",
      organization: "Hội Khoa học Quốc gia",
      description:
        "Công trình nghiên cứu về ứng dụng AI trong y tế được vinh danh",
    },
    {
      year: "2023",
      title: "Best Paper Award",
      organization: "International Conference on Data Science",
      description: "Bài báo xuất sắc nhất về Machine Learning và Big Data",
    },
    {
      year: "2023",
      title: "Học bổng Nghiên cứu Hậu tiến sĩ",
      organization: "Quỹ Phát triển Khoa học",
      description: "Tài trợ toàn phần cho nghiên cứu 2 năm",
    },
    {
      year: "2022",
      title: "Chứng chỉ Phân tích Dữ liệu Nâng cao",
      organization: "Coursera - Stanford University",
      description:
        "Machine Learning Specialization và Data Science Certificate",
    },
    {
      year: "2022",
      title: "Young Researcher Grant",
      organization: "Asian Science Foundation",
      description: "Tài trợ $10,000 cho dự án nghiên cứu độc lập",
    },
    {
      year: "2021",
      title: "Giải Nhất Hội nghị Khoa học Trẻ",
      organization: "Đại học Quốc gia",
      description: "Nghiên cứu sáng tạo về Computational Biology",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2 className="section-title">Thành tựu & Chứng chỉ</h2>
          <p className="section-subtitle">
            Những cột mốc quan trọng trong hành trình nghiên cứu của tôi
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-year">{achievement.year}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-org">{achievement.organization}</p>
              <p className="achievement-desc">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
