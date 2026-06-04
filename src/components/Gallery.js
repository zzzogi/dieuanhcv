import React, { useState } from "react";
import "./Gallery.css";
import OptimizedImage from "./OptimizedImage";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = t("gallery.items", { returnObjects: true }).map(
    (item) => ({
      ...item,
      src: `/dieuanhcv/assets/images/gallery/gallery-${item.id}.jpg`,
    }),
  );

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
      (img) => img.id === selectedImage.id,
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
          <h2 className="section-title">{t("gallery.title")}</h2>
          <p className="section-subtitle">{t("gallery.subtitle")}</p>
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
