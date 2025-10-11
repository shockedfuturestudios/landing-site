import { Github, Twitter, Youtube, Heart } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-auto h-12">
                <Logo className="w-auto h-12" />
              </div>
            </div>
            <p className="text-muted-foreground">
              Building a shock to gaming.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  Games
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="cta cta-secondary w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="cta cta-secondary w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="cta cta-secondary w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2025 Shocked Future Studios LLC. All Rights Reserved.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>by passionate indie devs.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
