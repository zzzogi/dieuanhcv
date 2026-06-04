import { useEffect, useState } from "react";
import "./Achievements.css";
import { useTranslation } from "react-i18next";

const Achievements = () => {
  const { t } = useTranslation();
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const certificateImages = [
    {
      id: 1,
      thumbnail: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-1.jpg",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-1.jpg",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-2.jpg",
        },
        {
          id: 3,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-3.jpg",
        },
        {
          id: 4,
          image: "/dieuanhcv/assets/images/certificates/hoc-tap/cert-4.jpg",
        },
      ],
    },
    {
      id: 2,
      thumbnail: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-1.png",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-1.png",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-2.jpg",
        },
        {
          id: 3,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-3.jpg",
        },
        {
          id: 4,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-4.png",
        },
        {
          id: 5,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-5.png",
        },
        {
          id: 6,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-6.jpg",
        },
        {
          id: 7,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-7.jpg",
        },
        {
          id: 8,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-8.png",
        },
        {
          id: 9,
          image: "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-9.png",
        },
        {
          id: 10,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-10.png",
        },
        {
          id: 11,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-11.png",
        },
        {
          id: 12,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-12.png",
        },
        {
          id: 13,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-13.png",
        },
        {
          id: 14,
          image:
            "/dieuanhcv/assets/images/certificates/tinh-nguyen/cert-14.jpg",
        },
      ],
    },
    {
      id: 3,
      thumbnail: "/dieuanhcv/assets/images/certificates/sv5t/cert-1.jpg",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/sv5t/cert-1.jpg",
        },
        {
          id: 2,
          image: "/dieuanhcv/assets/images/certificates/sv5t/cert-2.jpg",
        },
      ],
    },
    {
      id: 4,
      thumbnail: "/dieuanhcv/assets/images/certificates/doan-vien/cert-1.png",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/doan-vien/cert-1.png",
        },
      ],
    },
    {
      id: 5,
      thumbnail: "/dieuanhcv/assets/images/certificates/sv5t-tp/cert-1.png",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/sv5t-tp/cert-1.png",
        },
      ],
    },
    {
      id: 6,
      thumbnail: "/dieuanhcv/assets/images/certificates/svtb/cert-1.png",
      certificates: [
        {
          id: 1,
          image: "/dieuanhcv/assets/images/certificates/svtb/cert-1.png",
        },
      ],
    },
  ];

  const certificateSets = t("achievements.sets", { returnObjects: true }).map(
    (set) => {
      const imageData = certificateImages.find((img) => img.id === set.id);
      return {
        ...set,
        thumbnail: imageData?.thumbnail ?? "",
        certificates: set.certificates.map((cert, index) => ({
          ...cert,
          image: imageData?.certificates[index]?.image ?? "",
        })),
      };
    },
  );

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
          <h2 className="section-title">{t("achievements.title")}</h2>
          <p className="section-subtitle">{t("achievements.subtitle")}</p>
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
                    <span>
                      {set.certificates.length}{" "}
                      {t("achievements.certificatesCount")}
                    </span>
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
