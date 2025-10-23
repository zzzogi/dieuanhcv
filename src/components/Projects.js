import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "AI trong Chẩn đoán Y tế",
      category: "Machine Learning",
      description:
        "Phát triển mô hình deep learning để phát hiện bệnh qua hình ảnh X-ray với độ chính xác 94%. Hợp tác với 3 bệnh viện lớn.",
      tags: ["Python", "TensorFlow", "Computer Vision"],
      status: "Completed",
    },
    {
      title: "Phân tích Dữ liệu Lớn về Biến đổi Khí hậu",
      category: "Data Science",
      description:
        "Xử lý và phân tích 10TB dữ liệu khí tượng để dự đoán xu hướng biến đổi khí hậu ở Đông Nam Á trong 20 năm tới.",
      tags: ["R", "Big Data", "Statistical Modeling"],
      status: "In Progress",
    },
    {
      title: "Hệ thống Gợi ý Thuốc Thông minh",
      category: "Healthcare Tech",
      description:
        "Xây dựng recommendation system giúp bác sĩ đưa ra quyết định kê đơn dựa trên lịch sử bệnh án và tương tác thuốc.",
      tags: ["Python", "NLP", "Recommendation System"],
      status: "Completed",
    },
    {
      title: "Genomics và Sinh học Tính toán",
      category: "Bioinformatics",
      description:
        "Nghiên cứu về gene expression patterns và phát hiện biomarkers cho bệnh ung thư qua phân tích chuỗi gen.",
      tags: ["MATLAB", "Bioinformatics", "Statistical Analysis"],
      status: "Published",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Dự án nghiên cứu</h2>
          <p className="section-subtitle">
            Các dự án tiêu biểu mà tôi đã thực hiện và đóng góp
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span
                  className={`project-status status-${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
