import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showMobileViewer, setShowMobileViewer] = useState(false);

  const papers = [
    {
      id: 1,
      title:
        "The Role of Fear of Missing out (FOMO), Loss Aversion, and Herd Behavior in Gold Investment Decisions: A Study in the Vietnamese Market",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-1.pdf",
      authors:
        "Xuan Hung Nguyen*, Dieu Anh Bui, Nam Anh Le and Quynh Trang Nguyen",
      journal: "International Journal of Financial Studies",
      year: "2024",
      description:
        "This study investigates how psychological factors such as FOMO, loss aversion, and herd behavior influence individual investors' decisions to invest in gold in Vietnam.",
      citations: "?",
      status: "Published",
    },
    {
      id: 2,
      title:
        "Ảnh hưởng của hội chứng sợ bỏ lỡ tới quyết định đầu tư vàng tại Việt Nam",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-2.pdf",
      authors:
        "Nguyễn Xuân Hưng*, Bùi Diệu Anh, Lê Nam Anh, Nguyễn Quỳnh Trang, Phạm Thị Hạnh, Nguyễn Minh Thảo",
      journal: "Tạp chí Kinh tế và Phát triển",
      year: "3/2025",
      description:
        "Nghiên cứu này điều tra ảnh hưởng của các yếu tố tâm lý như hội chứng sợ bỏ lỡ (FOMO), ác cảm với thua lỗ và hành vi bầy đàn đến quyết định đầu tư vàng của các nhà đầu tư cá nhân tại Việt Nam.",
      citations: "?",
      status: "Published",
    },
    {
      id: 3,
      title:
        "The impact of FOMO on investment decisions in gold: The case of Vietnam",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-3.pdf",
      authors:
        "Xuan Hung Nguyen*, Manh Dung Tran, Dieu Anh Bui, Nam Anh Le, Quynh Trang Nguyen, Kim Ngan Nguyen, Thi Minh Phuong Nguyen",
      journal:
        "Conference Proceedings - 7th International Conference on Contemporary Issues in Economics, Management and Business",
      year: "2025",
      description:
        "This study explores the influence of the Fear of Missing Out (FOMO) phenomenon on individual investors' decisions to invest in gold within the Vietnamese market.",
      citations: "?",
      status: "Published",
    },
    {
      id: 4,
      title:
        "Tác động bất đối xứng của chất lượng thể chế đến du lịch: Nghiên cứu tại các quốc gia thành viên ASEAN",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-4.pdf",
      authors:
        "Nguyễn Thanh Hằng*, Nguyễn Thị Minh Ngọc, Bùi Diệu Anh, Đinh Thị Ánh Tuyết, Trần Huyền Thương",
      journal: "Kỷ yếu Hội thảo Khoa học Quốc gia",
      year: "12/2024",
      description:
        "Nghiên cứu này phân tích tác động bất đối xứng của chất lượng thể chế đến ngành du lịch tại các quốc gia thành viên ASEAN, sử dụng mô hình GMM để xử lý dữ liệu bảng.",
      citations: "?",
      status: "Published",
    },
    {
      id: 5,
      title:
        "ASYMMETRIC IMPACT OF INSTITUTIONAL QUALITY ON TOURISM RECEIPTS: A PANEL ANALYSIS OF ASEAN’S MEMBER COUNTRIES",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-5.pdf",
      authors:
        "Dr. Tran Phuoc Huy*, Nguyen Thanh Hang, Nguyen Th Minh Ngoc, Bui Dieu Anh, Dinh Thi Anh Tuyet, Tran Huyen Thuong",
      journal:
        "INTERNATIONAL CONFERENCE ON GLOBAL ECONOMY INSTABILITY AND POLICIES OF VIETNAM’S FINANCIAL SYSTEM - NATIONAL ECONOMICS UNIVERSITY PUBLISHING HOUSE",
      year: "2025",
      description:
        "This study examines the asymmetric effects of institutional quality on tourism receipts in ASEAN member countries using panel data analysis.",
      citations: "?",
      status: "Published",
    },
    {
      id: 6,
      title:
        "Tác động bất đối xứng của chất lượng thể chế đến lượng khách du lịch: Nghiên cứu tại các nước thành viên ASEAN",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-6.pdf",
      authors:
        "TS. Trần Phước Huy, Nguyễn Thanh Hằng, Nguyễn Thị Minh Ngọc, Bùi Diệu Anh, Đinh Thị Ánh Tuyết, Trần Huyền Thương",
      journal: "Tạp chí Kinh tế và Dự báo",
      year: "2025",
      description:
        "Sử dụng mô hình tự hồi quy phân phối trễ phi tuyến và kết quả hồi quy dữ liệu bảng, nghiên cứu phân tích tác động bất đối xứng của chất lượng thể chế đến lượng khách du lịch đến tại 10 quốc gia thành viên ASEAN giai đoạn 2002-2023 thông qua 6 Chỉ số Quản trị Toàn cầu của Ngân hàng Thế giới.",
      citations: "?",
      status: "Published",
    },
    {
      id: 7,
      title:
        "PHÁT TRIỂN NGUỒN NHÂN LỰC LĨNH VỰC LOGISTICS TRONG BỐI CẢNH CÁCH MẠNG CÔNG NGHIỆP 4.0",
      pdfUrl: "/dieuanhcv/assets/pdfs/bai-7.pdf",
      authors:
        "NGUYỄN XUÂN HƯNG*, BÙI DIỆU ANH**, LÊ NAM ANH***, LÊ ANH ĐỨC****, LÊ MẠNH HÙNG*****",
      journal: "Tạp chí Kinh tế và Quản lý",
      year: "2025",
      description:
        "Phát triển nguồn nhân lực lĩnh vực logistics trong bối cảnh cách mạng công nghiệp 4.0.",
      citations: "?",
      status: "Published",
    },
  ];

  // Set first paper as default
  React.useEffect(() => {
    if (papers.length > 0 && !selectedPaper) {
      setSelectedPaper(papers[0]);
    }
  }, []);

  const handlePaperSelect = (paper) => {
    setSelectedPaper(paper);
    // On mobile, open modal
    if (window.innerWidth <= 768) {
      setShowMobileViewer(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobileViewer = () => {
    setShowMobileViewer(false);
    document.body.style.overflow = "auto";
  };

  const downloadPDF = (pdfUrl, title) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Công trình nghiên cứu</h2>
          <p className="section-subtitle">
            Các bài báo khoa học đã được công bố trên tạp chí quốc tế
          </p>
        </div>

        <div className="pdf-reader-layout">
          {/* Left Sidebar - Paper List */}
          <div className="papers-sidebar">
            <div className="sidebar-header">
              <h3>Sản phẩm công bố ({papers.length})</h3>
            </div>
            <div className="papers-list">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  className={`paper-item ${
                    selectedPaper?.id === paper.id ? "active" : ""
                  }`}
                  onClick={() => handlePaperSelect(paper)}
                >
                  <div className="paper-item-info">
                    <h4 className="paper-item-title">{paper.title}</h4>
                    <p className="paper-item-journal">{paper.journal}</p>
                    <div className="paper-item-meta">
                      <span className="citations">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {paper.citations} lượt trích dẫn
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - PDF Viewer */}
          <div className="pdf-viewer-container">
            {selectedPaper && (
              <>
                <div className="pdf-viewer-header">
                  <div className="viewer-title-section">
                    <h3>{selectedPaper.title}</h3>
                    <p className="viewer-authors">{selectedPaper.authors}</p>
                    <div className="viewer-meta">
                      <span className="viewer-journal">
                        {selectedPaper.journal}
                      </span>
                      <span className="viewer-separator">•</span>
                      <span className="viewer-year">{selectedPaper.year}</span>
                      <span className="viewer-separator">•</span>
                      <span className="viewer-citations">
                        {selectedPaper.citations} lượt trích dẫn
                      </span>
                    </div>
                  </div>
                  <button
                    className="download-btn"
                    onClick={() =>
                      downloadPDF(selectedPaper.pdfUrl, selectedPaper.title)
                    }
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Tải file PDF
                  </button>
                </div>

                <div className="pdf-viewer">
                  <iframe
                    src={`${selectedPaper.pdfUrl}#view=FitH`}
                    title={selectedPaper.title}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile PDF Viewer Modal */}
      {showMobileViewer && selectedPaper && (
        <div className="mobile-pdf-modal" onClick={closeMobileViewer}>
          <div
            className="mobile-pdf-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-pdf-header">
              <h3>{selectedPaper.title}</h3>
              <button className="mobile-close-btn" onClick={closeMobileViewer}>
                &times;
              </button>
            </div>
            <div className="mobile-pdf-viewer">
              <iframe
                src={`${selectedPaper.pdfUrl}#view=FitH`}
                title={selectedPaper.title}
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
            <div className="mobile-pdf-footer">
              <button
                className="mobile-download-btn"
                onClick={() =>
                  downloadPDF(selectedPaper.pdfUrl, selectedPaper.title)
                }
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Tải xuống
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
