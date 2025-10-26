import { useEffect, useRef, useState } from "react";

function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  placeholder = "blur",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Load ảnh trước 50px
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Blur placeholder khi đang load */}
      {!isLoaded && (
        <div
          className="image-placeholder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #e0e0e0, #f5f5f5)",
            animation: "pulse 1.5s infinite",
          }}
        />
      )}

      {/* Chỉ load ảnh khi vào viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      )}
    </div>
  );
}

export default OptimizedImage;
