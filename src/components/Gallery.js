import React, { useState } from "react";
import "./Gallery.css";
import OptimizedImage from "./OptimizedImage";
import SectionHeader from "./SectionHeader";
import useReveal from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const revealRef = useReveal();
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

  // Two counter-drifting rows; each track holds the set twice for a
  // seamless loop. The second copy is hidden from assistive tech.
  const rowA = galleryImages;
  const rowB = [...galleryImages.slice(3), ...galleryImages.slice(0, 3)];

  const renderTrack = (images) =>
    [...images, ...images].map((image, i) => {
      const isClone = i >= images.length;
      return (
        <button
          key={`${image.id}-${i}`}
          type="button"
          className="marquee-item"
          onClick={() => openLightbox(image)}
          aria-hidden={isClone || undefined}
          tabIndex={isClone ? -1 : 0}
        >
          <img
            src={image.src}
            alt={isClone ? "" : image.title}
            loading="lazy"
          />
          <span className="marquee-caption">{image.title}</span>
        </button>
      );
    });

  return (
    <section id="gallery" className="gallery" ref={revealRef}>
      <div className="gallery-container">
        <SectionHeader
          number="06"
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />
      </div>

      <div className="gallery-marquee">
        <div className="marquee-row">
          <div className="marquee-track">{renderTrack(rowA)}</div>
        </div>
        <div className="marquee-row marquee-row--reverse">
          <div className="marquee-track">{renderTrack(rowB)}</div>
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
              autoFocus
            >
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
