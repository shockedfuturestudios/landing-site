import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const games = [
  {
    title: 'Neon Odyssey',
    description: 'A cyberpunk adventure through a world of neon lights and dark secrets. Uncover the truth behind the corporation.',
    status: 'In Development',
    image: 'https://images.unsplash.com/photo-1623002126996-a38b8a41f4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NTk4MDYxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['RPG', 'Cyberpunk', 'Story-Rich'],
    purchaseUrl: 'https://www.dissun.org/ '
  },
  {
    title: 'Quantum Shift',
    description: 'Manipulate time and space in this mind-bending puzzle platformer. Reality is not what it seems.',
    status: 'Coming 2026',
    image: 'https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nJTIwZGFya3xlbnwxfHx8fDE3NTk4ODMxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Puzzle', 'Platformer', 'Indie'],
    purchaseUrl: ''
  },
  {
    title: 'Project Echo',
    description: 'A mysterious new project that explores the boundaries between sound and gameplay. More details coming soon.',
    status: 'Concept',
    image: 'https://images.unsplash.com/photo-1673350808686-209dc177c898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk4MTIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Experimental', 'Audio', 'Mystery'],
    purchaseUrl: ''
  },
];

export function Games() {
  return (
    <section id="games" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Our Games</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of games that we attempt at unique experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3>{game.title}</h3>
                  <Badge variant="secondary" className="bg-purple-500/20 backdrop-blur-sm text-purple-300 border-purple-500/30">
                    {game.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4">{game.description}</p>

                <p className="text-muted-foreground mb-4"><a className="text-underline" target="_blank" href={game.purchaseUrl}>Purchase {game.title}</a></p>

                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
