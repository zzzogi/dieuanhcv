import { useEffect, useState } from "react";
import "./Achievements.css";

const Achievements = () => {
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Certificate Sets - Each set is a category
  const certificateSets = [
    {
      id: 1,
      category: "Nghiên cứu khoa học",
      title: "Thành tích Nghiên cứu Khoa học",
      description: "Giấy khen và chứng chỉ về thành tích Nghiên cứu khoa học",
      thumbnail: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-1.jpg",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-1.jpg",
          title: "Giải Nhất Nghiên cứu Khoa học cấp Đại học 2025",
          organization: "Đại học Kinh tế Quốc dân",
          year: "2025",
          description:
            "Giải Nhất Nghiên cứu khoa học sinh viên cấp Đại học 2025 với đề tài “Tác động bất đối xứng của chất lượng thể chế đến du lịch: Nghiên cứu tại các quốc gia thành viên ASEAN”",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-2.jpg",
          title: "Giải Nhì Nghiên cứu Khoa học cấp Đại học 2025",
          organization: "Đại học Kinh tế Quốc dân",
          year: "2025",
          description:
            "Giải Nhì Nghiên cứu khoa học sinh viên cấp Đại học 2025 với đề tài “Ảnh hưởng của hội chứng FOMO đến ý định đầu tư vàng tại Việt Nam”",
        },
        {
          id: 3,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-3.jpg",
          title:
            'The certificate of acceptance for the manuscript (ijfs-3794202) titled: "The role of Fear of Missing Out (FOMO), Loss Aversion, and Herd Behavior in Gold Investment Decisions: A Study in the Vietnamese Market"',
          organization: "International Journal of IMPACT Financial Studies",
          year: "2025",
          description:
            "Bài báo được đăng trên tạp chí quốc tế uy tín - Nhà xuất bản MDPI",
        },
        {
          id: 4,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-4.jpg",
          title:
            "CERTIFICATE OF PRESENTATION: Impacts of FOMO on investment decisions in gold: A Study in the Vietnamese Market",
          organization: "CIEMB",
          year: "2025",
          description:
            "Chứng chỉ trình bày tại Hội thảo quốc tế về Kinh tế và Quản lý kinh doanh CIEMB 2025",
        },
      ],
    },
    {
      id: 2,
      category: "Tình Nguyện Xuất Sắc",
      title: "Có thành tích xuất sắc trong hoạt động tình nguyện 2024-2025",
      description:
        "Sau khi thu thập đủ 15+ chứng chỉ tình nguyện trong năm học 2024-2025, tôi đã vinh dự nhận được giấy khen từ Ban Chấp Hành Hội Sinh Viên Đại Học Kinh Tế Quốc Dân",
      thumbnail: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-1.png", // Best certificate as thumbnail
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-1.png",
          title: "Có thành tích xuất sắc trong hoạt động tình nguyện 2024-2025",
          organization:
            "BAN CHẤP HÀNH HỘI SINH VIÊN VIỆT NAM ĐẠI HỌC KINH TẾ QUỐC DÂN",
          year: "2025",
          description:
            "Sau khi thu thập đủ 15+ chứng chỉ tình nguyện trong năm học 2024-2025, tôi đã vinh dự nhận được giấy khen từ Ban Chấp Hành Hội Sinh Viên Đại Học Kinh Tế Quốc Dân",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-2.jpg",
          title:
            'Tham gia 01 ngày tình nguyện Chiến dịch tình nguyện "Sắc thu"',
          organization:
            "Hội sinh viên Việt Nam trường Đại học Kinh tế Quốc dân",
          year: "2024",
          description: "",
        },
        {
          id: 3,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-3.jpg",
          title: "Tham gia 01 ngày tình nguyện Hiến máu tình nguyện",
          organization: "BCĐ vận động hiến máu tình nguyện thành phố Hà Nội",
          year: "2024",
          description: "",
        },
        {
          id: 4,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-4.png",
          title:
            'Tham gia 01 ngày tình nguyện chương trình "Tình nguyện mùa xuân 2025"',
          organization:
            "Đội thanh niên tình nguyện khoa Kinh tế và Kinh doanh quốc tế",
          year: "2025",
          description: "",
        },
        {
          id: 5,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-5.png",
          title:
            'Tham gia 01 ngày tình nguyện "Góp mì cho em" tại Thạnh Hoà, Hậu Giang',
          organization: "Dự án thiện nguyện Lá Xanh",
          year: "2025",
          description: "",
        },
        {
          id: 6,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-6.jpg",
          title:
            'Tham gia 01 ngày tình nguyện: Là tình nguyện viên xuất sắc khi tham gia chiến dịch "Clean up Việt Nam lần 7" Hưởng ứng Ngày Môi trường thế giới và Ngày Đại dương thế giới với chủ đề "Đại dương kỳ diệu" được tổ chức bởi Cộng Đồng Xanh Việt Nam.',
          organization: "Bộ Nông Nghiệp và Môi trường",
          year: "2025",
          description: "",
        },
        {
          id: 7,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-7.jpg",
          title:
            'Tham gia 01 ngày tình nguyện "Kết nắng gửi thương 2025: Gửi trọn yêu thương - Xâu kết văn hóaTham gia 01 ngày tình nguyện Chương trình Chiến dịch gây quỹ "30k - Góp nắng yêu thương"',
          organization: "CLB Sinh viên 5 tốt - Đại học Kinh tế Quốc dân",
          year: "2025",
          description: "",
        },
        {
          id: 8,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-8.png",
          title:
            "Tham gia 01 ngày tình nguyện quyên góp sách vở và đồ dùng học tập trong Chiến dịch Hè xanh màu áo Tự hào Quản trị",
          organization: "Liên chi Đoàn Khoa Quản trị kinh doanh - NEU",
          year: "2025",
          description: "",
        },
        {
          id: 9,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-9.png",
          title:
            'Tham gia 01 ngày tình nguyện trao tặng cờ trong Chương trình "Trao gửi cờ Tổ quốc - Gửi triệu niềm tin về nơi cội nguồn cách mạng"',
          organization: "Liên chi Đoàn Khoa Quản trị kinh doanh - NEU",
          year: "2025",
          description: "",
        },
        {
          id: 10,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-10.png",
          title:
            'Tham gia 01 ngày tình nguyện Vận động nguyên góp đồ dùng học tập trong chiến dịch Thanh niên tình nguyện hè 2025 "Sắc màu linh sơn"',
          organization:
            "Ban Chấp Hành Liên Chi Đoàn Khoa Du lịch và Khách sạn - NEU",
          year: "2025",
          description: "",
        },
        {
          id: 11,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-11.png",
          title:
            'Tham gia 01 ngày tình nguyện Chương trình "Mùa hè xanh 2025 - Ngàn trái tim xanh, Vạn tia nắng ấm"',
          organization:
            "Đội thanh niên tình nguyện khoa Kinh tế và Kinh doanh quốc tế",
          year: "2025",
          description: "",
        },
        {
          id: 12,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-12.png",
          title:
            'Tham gia 01 ngày tình nguyện Chương trình tình nguyện hè "Gieo mầm yêu thương"',
          organization: "Hội sinh viên trường Đại học Thương mại",
          year: "2025",
          description: "",
        },
        {
          id: 13,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-13.png",
          title:
            'Tham gia 01 ngày tình nguyện quyên góp Chương trình "Trung thu cho em"',
          organization: "Dự án thiện nguyện Lá Xanh",
          year: "2025",
          description: "",
        },
        {
          id: 14,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-14.jpg",
          title:
            'Tham gia 01 ngày tình nguyện quyên góp Chương trình "Trung thu đoàn viên"',
          organization: "Dự án thiện nguyện Lá Xanh",
          year: "2025",
          description: "",
        },
      ],
    },
    {
      id: 3,
      category: "Sinh viên 5 Tốt",
      title: "Danh hiệu Sinh viên 5 Tốt cấp Đại học năm 2024",
      description: "",
      thumbnail: "/dieuanhcv/assets/images/certificates/sv5t/cert-1.jpg",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/sv5t/cert-1.jpg",
          title: "Danh hiệu Sinh viên 5 Tốt cấp Đại học năm 2024",
          organization: "Ban Chấp hành Hội Sinh viên Đại học Kinh tế Quốc dân",
          year: "2024",
          description: "",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/sv5t/cert-2.jpg",
          title: "Danh hiệu Sinh viên 5 Tốt cấp Đại học năm 2024",
          organization: "Ban Chấp hành Hội Sinh viên Đại học Kinh tế Quốc dân",
          year: "2024",
          description: "",
        },
      ],
    },
    {
      id: 4,
      category: "Đoàn viên tiêu biểu xuất sắc",
      title:
        'Đạt danh hiệu "Đoàn viên tiêu biểu xuất sắc" cấp Đại học năm học 2024 - 2025',
      description: "",
      thumbnail: "/dieuanhcv/assets/images/certificates/doan-vien/cert-1.png",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/doan-vien/cert-1.png",
          title:
            'Đạt danh hiệu "Đoàn viên tiêu biểu xuất sắc" cấp Đại học năm học 2024 - 2025',
          organization: "Đoàn TNCS Hồ Chí Minh - Đại học Kinh tế Quốc dân",
          year: "2025",
          description: "",
        },
      ],
    },
  ];

  const openLightbox = (set) => {
    setSelectedSet(set);
    setCurrentCertIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedSet(null);
    setCurrentCertIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "auto";
  };

  const navigateCert = (direction) => {
    if (!selectedSet) return;

    const totalCerts = selectedSet.certificates.length;
    if (direction === "next") {
      setCurrentCertIndex((prev) => (prev + 1) % totalCerts);
    } else {
      setCurrentCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
    }
    // Reset zoom when changing certificate
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const goToCert = (index) => {
    setCurrentCertIndex(index);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleImageLoad = (setId) => {
    setLoadedImages((prev) => ({ ...prev, [setId]: true }));
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 1));
    if (zoomLevel <= 1.3) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag to pan when zoomed
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedSet) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateCert("next");
      if (e.key === "ArrowLeft") navigateCert("prev");
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleResetZoom();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedSet, currentCertIndex, zoomLevel]);

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2 className="section-title">Thành tựu & Chứng chỉ</h2>
          <p className="section-subtitle">
            Những cột mốc quan trọng trong hành trình nghiên cứu của tôi
          </p>
        </div>

        <div className="certificate-sets-grid">
          {certificateSets.map((set) => (
            <div
              key={set.id}
              className="certificate-set-card"
              onClick={() => openLightbox(set)}
            >
              <div
                className={`set-placeholder ${
                  loadedImages[set.id] ? "loaded" : ""
                }`}
              >
                <div className="shimmer"></div>
              </div>

              <div className="set-image-wrapper">
                <img
                  src={set.thumbnail}
                  alt={set.title}
                  className={`set-image ${
                    loadedImages[set.id] ? "loaded" : ""
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(set.id)}
                />
                <div className="set-overlay">
                  <div className="cert-count">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                    <span>{set.certificates.length} certificates</span>
                  </div>
                </div>
              </div>

              <div className="set-info">
                <div className="set-category">{set.category}</div>
                <h3 className="set-title">{set.title}</h3>
                <p className="set-description">{set.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Gallery and Zoom */}
      {selectedSet && (
        <div className="cert-lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Main certificate display with zoom */}
            <div className="lightbox-main">
              <button
                className="lightbox-nav lightbox-prev"
                onClick={() => navigateCert("prev")}
                aria-label="Previous certificate"
              >
                &#8249;
              </button>

              <div
                className="lightbox-image-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                style={{
                  cursor:
                    zoomLevel > 1
                      ? isDragging
                        ? "grabbing"
                        : "grab"
                      : "default",
                }}
              >
                <img
                  src={selectedSet.certificates[currentCertIndex].image}
                  alt={selectedSet.certificates[currentCertIndex].title}
                  className="lightbox-cert-image"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${
                      position.x / zoomLevel
                    }px, ${position.y / zoomLevel}px)`,
                    transition: isDragging ? "none" : "transform 0.3s ease",
                  }}
                  draggable="false"
                />
              </div>

              <button
                className="lightbox-nav lightbox-next"
                onClick={() => navigateCert("next")}
                aria-label="Next certificate"
              >
                &#8250;
              </button>

              {/* Zoom Controls */}
              <div className="zoom-controls">
                <button
                  className="zoom-btn"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  title="Zoom Out (-)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </button>
                <span className="zoom-level">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  className="zoom-btn"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  title="Zoom In (+)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </button>
                <button
                  className="zoom-btn reset-btn"
                  onClick={handleResetZoom}
                  disabled={zoomLevel === 1}
                  title="Reset Zoom (0)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Certificate info */}
            <div className="lightbox-info">
              <div className="info-header">
                <div className="lightbox-category">{selectedSet.category}</div>
                <div className="cert-counter">
                  {currentCertIndex + 1} / {selectedSet.certificates.length}
                </div>
              </div>

              <div className="lightbox-year">
                {selectedSet.certificates[currentCertIndex].year}
              </div>
              <h3 className="lightbox-title">
                {selectedSet.certificates[currentCertIndex].title}
              </h3>
              <p className="lightbox-org">
                {selectedSet.certificates[currentCertIndex].organization}
              </p>
              <p className="lightbox-desc">
                {selectedSet.certificates[currentCertIndex].description}
              </p>
            </div>

            {/* Thumbnail navigation */}
            <div className="thumbnail-strip">
              {selectedSet.certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`thumbnail-item ${
                    index === currentCertIndex ? "active" : ""
                  }`}
                  onClick={() => goToCert(index)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
