import { Code, Users, Zap, BotOff } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Code,
    title: 'Innovative Design',
    description: 'We stay with the new while innovating on the old.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Our players are at the heart of everything we do. We listen, adapt, and grow together.',
  },
  {
    icon: Zap,
    title: 'Rapid Innovation',
    description: 'Development Cycles are done as regularly as possible with a small team like us.',
  },
  {
    icon: BotOff,
    title: 'Human over Arificial',
    description: 'We believe that human creativity and intuition are irreplaceable, even in an age of AI. We use technology to enhance our creative process, not replace it.',
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">About Our Studio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Born from a passion for gaming and a vision for the future, Shocked Future is dedicated to
            creating games that surprise, delight, and inspire players around the world.
          </p>
        </motion.div>

        {/* Render all but the last feature in the responsive grid */}
        <div className="games-grid gap-8">
          {features.slice(0, -1).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 feature-card rounded-xl border hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-white/10">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Render the last feature on its own full-width row */}
        {features.length > 0 && (() => {
          const last = features[features.length - 1];
          const Icon = last.icon;
          return (
            <div className="mt-8 mx-auto">
              <motion.div
                key={last.title}
                className="p-6 feature-card rounded-xl border hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 noai-gradient backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 border border-white/10">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2"><strong>{last.title}</strong></h3>
                <p className="text-muted-foreground"><strong>{last.description}</strong></p>
              </motion.div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
