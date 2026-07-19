import "./SectionHeader.css";

/**
 * Journal-style section header: a mono section number leading a hairline
 * rule, with the title set in serif below. Recurs across every section to
 * give the page the rhythm of a typeset journal.
 */
const SectionHeader = ({ number, title, subtitle }) => (
  <header className="journal-header">
    <div className="journal-rule" aria-hidden="true">
      <span className="journal-number">{number}</span>
      <span className="journal-line" />
    </div>
    <h2 className="journal-title">{title}</h2>
    {subtitle && <p className="journal-subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeader;
