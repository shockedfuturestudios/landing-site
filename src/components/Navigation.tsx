import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LogoNoTypography } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
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
            <button onClick={() => scrollToSection('team')} className="hover:text-purple-400 transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
              Contact
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
          </div>
        )}
      </div>
    </nav>
  );
}
