const AvisVerifiesLogo = ({ height = 24 }: { height?: number }) => (
  <div className="flex items-center gap-1.5" style={{ height }}>
    {/* Official Avis Vérifiés star icon - blue */}
    <svg
      viewBox="0 0 40 40"
      fill="none"
      style={{ height, width: 'auto' }}
      aria-hidden="true"
    >
      <path d="M20 0l5.5 8.5L35 6l-2.5 9.5L40 20l-7.5 4.5L35 34l-9.5-2.5L20 40l-5.5-8.5L5 34l2.5-9.5L0 20l7.5-4.5L5 6l9.5 2.5L20 0z" fill="#0062FF" />
      <path d="M20 8l3.3 5.1L29 11.4l-1.5 5.7L32 20l-4.5 2.7L29 28.6l-5.7-1.5L20 32l-3.3-5.1-5.7 1.5 1.5-5.7L8 20l4.5-2.7L11 11.4l5.7 1.5L20 8z" fill="white" fillOpacity="0.25" />
      <polygon points="20,10 22.5,16.5 29,16.5 24,20.5 26,27 20,23 14,27 16,20.5 11,16.5 17.5,16.5" fill="white" />
    </svg>
    <span
      className="font-bold leading-none"
      style={{ fontSize: height * 0.6, color: '#0062FF' }}
    >
      Avis
    </span>
    <span
      className="font-bold leading-none"
      style={{ fontSize: height * 0.6, color: '#1a1a1a' }}
    >
      Vérifiés
    </span>
  </div>
);

export default AvisVerifiesLogo;
