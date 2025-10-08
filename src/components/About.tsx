import { Code, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Code,
    title: 'Innovative Design',
    description: 'We push the boundaries of game design, creating unique mechanics and unforgettable experiences.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Our players are at the heart of everything we do. We listen, adapt, and grow together.',
  },
  {
    icon: Zap,
    title: 'Rapid Innovation',
    description: 'Fast-paced development cycles allow us to iterate quickly and deliver quality games.',
  },
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

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
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
      </div>
    </section>
  );
}
