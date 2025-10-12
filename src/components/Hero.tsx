import { Gamepad2, TriangleAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-background to-gray-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* [START] quick alert tooltip */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/12 backdrop-blur-sm border border-red-600/20 rounded-full mb-8 text-red-500">
            <TriangleAlert className="w-4 h-4" />
            <span className="text-sm font-bold ">Website in Beta — content may change</span>
          </div>
        </motion.div>
        {/* [END] quick alert tooltip */}

        { /* [START] Logo and Tagline */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo className="w-auto h-26 md:h-40 drop-shadow-2xl" />
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-muted-foreground font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stay Shocked for the Future.
        </motion.p>
        { /* [END] Logo and Tagline */}

        { /* [START] Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta cta-primary group px-8 py-3 rounded-lg transition-all duration-300 "
          >
            <span className="flex items-center justify-center space-x-2">
              <Gamepad2 className="w-5 h-5" />
              <span className="font-bold">Explore Our Games</span>
            </span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta cta-secondary px-8 py-3 rounded-lg transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
      { /* [END] Call to Action Buttons */}
    </section>
  );
}
