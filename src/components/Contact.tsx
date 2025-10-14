import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CONTACT_EMAIL } from '../config/site';

type WindowWithTurnstile = Window & {
  turnstileCallback?: (token: string) => void;
  turnstileExpired?: () => void;
};


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // The form performs native POST submission to FormSubmit; keep local state for controlled inputs.
  const [isVerified, setIsVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted] = useState<boolean>(() => {
    try {
      const url = new URL(window.location.href);
      const wasSubmitted = url.searchParams.get('contact_submitted') === '1';
      if (wasSubmitted) {
        // remove the flag immediately from the URL to keep it clean
        url.searchParams.delete('contact_submitted');
        window.history.replaceState({}, document.title, url.toString());
      }
      return wasSubmitted;
    } catch {
      return false;
    }
  });
  const [nextUrl] = useState<string>(() => {
    try {
      return `${window.location.origin}${window.location.pathname}?contact_submitted=1`;
    } catch {
      return '';
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Inject Cloudflare Turnstile script if not already present
    if (!document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) {
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    // Expose callbacks that Turnstile can call when challenge succeeds or expires.
    const w = window as WindowWithTurnstile;
    w.turnstileCallback = () => {
      setIsVerified(true);
    };
    w.turnstileExpired = () => {
      setIsVerified(false);
    };

    return () => {
      // cleanup globals
      try {
        delete (window as WindowWithTurnstile).turnstileCallback;
        delete (window as WindowWithTurnstile).turnstileExpired;
      } catch { }
    };
  }, []);

  // Use FormSubmit's _next parameter to redirect back to this page after a successful submit.
  // On mount we'll populate the _next value and detect the success query param to show a thank-you UI.
  // nextUrl and submitted are derived on mount using lazy initializers above

  // If the page was redirected back after a successful submit, scroll to the contact section so
  // the user sees the thank-you panel immediately.
  useEffect(() => {
    if (submitted) {
      try {
        const el = document.getElementById('contact');
        if (el) {
          // Delay slightly so the browser has painted the content
          window.requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
        }
      } catch { }
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formEl = e.currentTarget as HTMLFormElement;

    if (!isVerified) {
      e.preventDefault();
      const widget = formEl.querySelector('.cf-turnstile') as HTMLElement | null;
      widget?.focus?.();
      return;
    }

    if (submitting || submitted) {
      e.preventDefault();
      return;
    }

    // allow the browser to perform a normal POST to FormSubmit which will redirect to _next
    // set a submitting flag to avoid double submits if needed
    setSubmitting(true);
    // don't preventDefault() so the native form submits
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        {/* removed section title and subtitle for a cleaner thank-you focused layout */}

        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 bg-white/3 rounded-lg text-center space-y-4">
                <h3 className="mb-2">Thank you!</h3>
                <p className="text-muted-foreground">Your message has been sent. We&apos;ll get back to you shortly.</p>
                <br />
                <div>
                  <button
                    type="button"
                    onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cta cta-primary px-6 py-2 rounded-lg"
                  >
                    Explore our games
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-muted-foreground">{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                  action={`https://formsubmit.co/5625c6a64f9871683c86c5abdca98a84`}
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all input-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all input-shadow"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none input-shadow"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <input type="hidden" name="_subject" value="New Message from Shocked Future." />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={nextUrl} />
                <button
                  type="submit"
                  className="cta cta-primary w-full px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-white/10"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </motion.form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
