import React, { useState } from "react";
import "./Gallery.css";
import OptimizedImage from "./OptimizedImage";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Update these with your actual image filenames and descriptions
  const galleryImages = [
    {
      id: 1,
      src: "/dieuanhcv/assets/images/gallery/gallery-1.jpg",
      title: "Giải Nhất Nghiên cứu khoa học cấp Đại học 2025",
      description:
        "Giải Nhất Nghiên cứu khoa học cấp Đại học 2025 với đề tài “Tác động bất đối xứng của chất lượng thể chế đến du lịch: Nghiên cứu tại các quốc gia thành viên ASEAN”",
    },
    {
      id: 2,
      src: "/dieuanhcv/assets/images/gallery/gallery-2.jpg",
      title: "Giải Nhì Nghiên cứu khoa học cấp Đại học 2025",
      description:
        "Giải Nhì Nghiên cứu khoa học cấp Đại học 2025 với đề tài “Ảnh hưởng của hội chứng FOMO đến ý định đầu tư vàng tại Việt Nam”",
    },
    {
      id: 3,
      src: "/dieuanhcv/assets/images/gallery/gallery-3.jpg",
      title: "Hội thảo khoa học quốc tế GEIPOVFS",
      description:
        "Tham gia và trình bày bài nghiên cứu tại Hội thảo khoa học quốc tế “Bất ổn kinh tế toàn cầu và đối sách của hệ thống tài chính Việt Nam” (Global Economy Instability and Policies of Vietnam's Financial system) (GEIPOVFS)",
    },
    {
      id: 4,
      src: "/dieuanhcv/assets/images/gallery/gallery-4.jpg",
      title: "Chuyến đi Sapa 2025",
      description: "I like traveling",
    },
    {
      id: 5,
      src: "/dieuanhcv/assets/images/gallery/gallery-5.jpg",
      title: "Hội nghị Diên Hồng - My Lovely Squad",
      description: "Toàn những người đáng yêu",
    },
    {
      id: 6,
      src: "/dieuanhcv/assets/images/gallery/gallery-6.jpg",
      title: "Học, học nữa, học mãi",
      description: "Tôi sống với châm ngôn này",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Navigate to next/previous image
  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Những khoảnh khắc đáng nhớ của tôi</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <OptimizedImage
                src={image.src}
                alt={image.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigateImage("prev")}
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigateImage("next")}
              aria-label="Next image"
            >
              &#8250;
            </button>

            <OptimizedImage
              src={selectedImage.src}
              alt={selectedImage.title}
              className="lightbox-image"
              loading="lazy"
            />

            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
