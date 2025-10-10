import { useEffect, useState } from 'react';

export function LogoLight({ className = "w-auto h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="73.5" cy="60.5" r="41.5" stroke="black" stroke-width="3"></circle>
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="black" stroke="black" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path>

      <text x="125" y="75" fill="black" class="tracking-tight"><tspan font-size="35" font-weight="700">SHOCKED</tspan></text>

      <text x="292" y="75" fill="black" class="tracking-wide"><tspan font-size="35" font-weight="700" letter-spacing="2">FUTURE</tspan></text>

      <text x="442" y="75" fill="black" class="tracking-wide"><tspan font-size="35" font-weight="700" letter-spacing="2">STUDIOS</tspan></text>
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
    <svg viewBox="0 0 640 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="73.5" cy="60.5" r="41.5" stroke="white" stroke-width="3"></circle>
      <path d="M29 71.1111L84.625 10V48.8889H118L62.375 110V71.1111H29Z" fill="white" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path>

      <text x="125" y="75" fill="white" class="tracking-tight"><tspan font-size="35" font-weight="700">SHOCKED</tspan></text>

      <text x="292" y="75" fill="white" class="tracking-wide"><tspan font-size="35" font-weight="700" letter-spacing="2">FUTURE</tspan></text>

      <text x="442" y="75" fill="white" class="tracking-wide"><tspan font-size="35" font-weight="700" letter-spacing="2">STUDIOS</tspan></text>
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
