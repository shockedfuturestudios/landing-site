import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LogoNoTypography } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      // default to system preference
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch { }
    } else {
      root.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch { }
    }
  }, [isDark]);

  // sync with system theme changes
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      // only change if user hasn't explicitly stored a preference
      try {
        const stored = localStorage.getItem('theme');
        if (stored) return;
      } catch { }
      setIsDark(e.matches);
    };
    if (mq && mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq && mq.addListener) mq.addListener(handler);
    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', handler);
      else if (mq && mq.removeListener) mq.removeListener(handler);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Keep the nav always using the faded background so it softly blends
  // with page content regardless of scroll position.
  const navClass = 'bg-background-fade backdrop-blur-sm';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${navClass}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <LogoNoTypography className="w-auto h-10" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('games')} className="hover:text-purple-400 transition-colors">
              Games
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
              Contact
            </button>
            <button
              onClick={() => setIsDark(d => !d)}
              className="p-2 rounded-md hover:bg-white/5 transition-colors flex items-center"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all backdrop-blur-sm">
              About
            </button>
            <button onClick={() => scrollToSection('games')} className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all backdrop-blur-sm">
              Games
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all backdrop-blur-sm">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all backdrop-blur-sm">
              Contact
            </button>
            <div className="px-4">
              <button
                onClick={() => setIsDark(d => !d)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
