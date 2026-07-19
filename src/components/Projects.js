import React, { useState } from "react";
import "./Projects.css";
import SectionHeader from "./SectionHeader";
import papers from "../data/papers";
import useReveal from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

// Dieu Anh's name as it appears across bylines; highlighted in citations.
const SELF_NAMES = [
  "Bùi Diệu Anh",
  "BÙI DIỆU ANH",
  "Bui Dieu Anh",
  "Dieu Anh Bui",
];
const selfSplit = new RegExp(`(${SELF_NAMES.join("|")})`, "g");

const formatAuthors = (authors) =>
  authors
    .split(selfSplit)
    .map((part, i) =>
      SELF_NAMES.includes(part) ? (
        <strong key={i} className="author-self">
          {part}
        </strong>
      ) : (
        part
      ),
    );

const Projects = () => {
  const { t } = useTranslation();
  const revealRef = useReveal();
  const [selectedPaper, setSelectedPaper] = useState(papers[0] ?? null);
  const [showMobileViewer, setShowMobileViewer] = useState(false);

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
    <section id="projects" className="projects" ref={revealRef}>
      <div className="projects-container">
        <SectionHeader
          number="05"
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="pdf-reader-layout">
          {/* Left Sidebar - Reference list */}
          <div className="papers-sidebar">
            <div className="sidebar-header">
              <h3>
                {t("projects.publishedWorks")} ({papers.length})
              </h3>
            </div>
            <div className="papers-list">
              {papers.map((paper, index) => (
                <div
                  key={paper.id}
                  className={`paper-item ${
                    selectedPaper?.id === paper.id ? "active" : ""
                  }`}
                  onClick={() => handlePaperSelect(paper)}
                >
                  <span className="paper-item-index">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <div className="paper-item-info">
                    <h4 className="paper-item-title">{paper.title}</h4>
                    <p className="paper-item-authors">
                      {formatAuthors(paper.authors)}
                    </p>
                    <p className="paper-item-journal">
                      <cite>{paper.journal}</cite>
                      <span className="paper-item-year"> · {paper.year}</span>
                    </p>
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
                    <p className="viewer-authors">
                      {formatAuthors(selectedPaper.authors)}
                    </p>
                    <div className="viewer-meta">
                      <cite className="viewer-journal">
                        {selectedPaper.journal}
                      </cite>
                      <span className="viewer-separator">·</span>
                      <span className="viewer-year">{selectedPaper.year}</span>
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
                    {t("projects.downloadPdf")}
                  </button>
                </div>

                <div className="pdf-viewer">
                  <p className="pdf-loading" aria-hidden="true">
                    {t("projects.loadingPdf")}
                  </p>
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
                {t("projects.downloadPdf")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
