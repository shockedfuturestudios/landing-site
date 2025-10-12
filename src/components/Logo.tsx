import { useEffect, useState } from 'react';

export function LogoLight({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 685 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="73.5" cy="60.5" r="41.5" stroke="black" strokeWidth="5"></circle>
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="black" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>

      <text x="125" y="75" fill="black" className="tracking-tight"><tspan fontSize="35" fontWeight="800">SHOCKED</tspan></text>

      <text x="320" y="75" fill="black" className="tracking-wide"><tspan fontSize="35" fontWeight="800" letterSpacing="2">FUTURE</tspan></text>

      <text x="495" y="75" fill="black" className="tracking-wide"><tspan fontSize="35" fontWeight="800" letterSpacing="2">STUDIOS</tspan></text>
    </svg>
  );
}

export function LogoNoTypographyLight({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M511.5 109C734.365 109 915 289.447 915 512C915 734.553 734.365 915 511.5 915C288.635 915 108 734.553 108 512C108 289.447 288.635 109 511.5 109Z" stroke="black" strokeWidth="56" />
      <path d="M92 616.5L617 39V406.5H932L407 984V616.5H92Z" fill="black" stroke="black" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoDark({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 685 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="73.5" cy="60.5" r="41.5" stroke="white" strokeWidth="5"></circle>
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="white" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"></path>

      <text x="125" y="75" fill="white" className="tracking-tight"><tspan fontSize="35" fontWeight="800">SHOCKED</tspan></text>

      <text x="320" y="75" fill="white" className="tracking-wide"><tspan fontSize="35" fontWeight="800" letterSpacing="2">FUTURE</tspan></text>

      <text x="495" y="75" fill="white" className="tracking-wide"><tspan fontSize="35" fontWeight="800" letterSpacing="2">STUDIOS</tspan></text>
    </svg>
  );
}

export function LogoNoTypographyDark({ className = "w-auto h-24" }: { className?: string }) {
  return (

    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M511.5 109C734.365 109 915 289.447 915 512C915 734.553 734.365 915 511.5 915C288.635 915 108 734.553 108 512C108 289.447 288.635 109 511.5 109Z" stroke="white" strokeWidth="56" />
      <path d="M92 616.5L617 39V406.5H932L407 984V616.5H92Z" fill="white" stroke="white" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
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
