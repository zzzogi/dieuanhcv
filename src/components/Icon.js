/* Minimal line-icon set, 1.5px stroke, drawn for this site.
   Replaces OS-dependent emoji so iconography renders identically everywhere. */

const paths = {
  flask: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10 3v5.2L4.8 17.4A2 2 0 0 0 6.6 20.5h10.8a2 2 0 0 0 1.8-3.1L14 8.2V3" />
      <path d="M7.3 14.5h9.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <circle cx="8.5" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18a13.5 13.5 0 0 1 0-18" />
    </>
  ),
  pen: (
    <>
      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  presentation: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M7 12l3-3 2 2 4-4" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
    </>
  ),
};

const Icon = ({ name, size = 26, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {paths[name]}
  </svg>
);

export default Icon;
