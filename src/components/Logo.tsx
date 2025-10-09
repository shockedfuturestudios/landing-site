export function Logo({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt / shock element */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Circuit-style decorative elements */}
      <path
        d="M10 60 L30 60 L30 50 L40 50"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="30" cy="60" r="3" fill="url(#logoGradient)" />
      <circle cx="40" cy="50" r="3" fill="url(#logoGradient)" />
      
      {/* Lightning bolt icon */}
      <path
        d="M65 25 L50 60 L60 60 L45 95 L75 50 L65 50 Z"
        fill="url(#logoGradient)"
        className="drop-shadow-lg"
      />
      
      {/* SHOCKED text */}
      <text
        x="95"
        y="50"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-tight"
      >
        <tspan fontSize="28" fontWeight="700">SHOCKED</tspan>
      </text>
      
      {/* FUTURE text */}
      <text
        x="95"
        y="80"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-wide"
      >
        <tspan fontSize="24" fontWeight="300" letterSpacing="2">FUTURE</tspan>
      </text>
      
      {/* Circuit-style decorative elements (right side) */}
      <path
        d="M360 60 L380 60 L380 70 L390 70"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="380" cy="60" r="3" fill="url(#logoGradient)" />
      <circle cx="390" cy="70" r="3" fill="url(#logoGradient)" />
    </svg>
  );
}
