import { useEffect, useState } from 'react';

export function LogoLight({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      width="100%"
      height="100%"
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

      <circle cx="73.5" cy="60.5" r="41.5" stroke="black" strokeWidth={5} />
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="black" stroke="black" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />

      {/* SHOCKED text */}
      <text
        x="130"
        y="50"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-tight"
      >
        <tspan fontSize="28" fontWeight="700">SHOCKED</tspan>
      </text>

      {/* FUTURE text */}
      <text
        x="130"
        y="80"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-wide"
      >
        <tspan fontSize="24" fontWeight="300" letterSpacing="2">FUTURE</tspan>
      </text>
    </svg>
  );
}

export function LogoNoTypographyLight({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

      <circle cx="73.5" cy="60.5" r="41.5" stroke="black" strokeWidth={9} />
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="black" stroke="black" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoDark({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt / shock element */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <circle cx="73.5" cy="60.5" r="41.5" stroke="white" strokeWidth={5} />
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="white" stroke="white" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />

      {/* SHOCKED text */}
      <text
        x="130"
        y="50"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-tight"
      >
        <tspan fontSize="28" fontWeight="700">SHOCKED</tspan>
      </text>

      {/* FUTURE text */}
      <text
        x="130"
        y="80"
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="tracking-wide"
      >
        <tspan fontSize="24" fontWeight="300" letterSpacing="2">FUTURE</tspan>
      </text>
    </svg>
  );
}

export function LogoNoTypographyDark({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

      <circle cx="73.5" cy="60.5" r="41.5" stroke="white" strokeWidth={9} />
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="white" stroke="white" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Wrapper components that choose the correct logo based on the `dark` class on <html>
export function Logo({ className = 'w-auto h-24' }: { className?: string }) {
  const getInitial = () => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => {
      setIsDark(el.classList.contains('dark'));
    });
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  // Render only the active logo variant to avoid layout issues
  return isDark ? <LogoDark className={className} /> : <LogoLight className={className} />;
}

export function LogoNoTypography({ className = 'w-auto h-24' }: { className?: string }) {
  const getInitial = () => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => {
      setIsDark(el.classList.contains('dark'));
    });
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return isDark ? <LogoNoTypographyDark className={className} /> : <LogoNoTypographyLight className={className} />;
}
