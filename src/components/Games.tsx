import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const games = [
  {
    title: 'Codename: Tribute',
    description: 'Codename: Tribute is a Text RPG game based on a fictional island named New Bank. where you play as the islands Refuge Rescue Team from before the Bombs fell. Experience the stories of the people who lived there before the apocalypse.',
    status: 'In Development',
    image: 'game_banner/sbtb_banner.png',
    tags: ['TRPG', 'Realistic-Fiction', 'Story-Rich', 'Indie'],
    purchaseUrl: 'https://shockedfuture.itch.io/sbtb',
    disablePurchase: true
  },
  {
    title: 'Codename: Flarepoint',
    description: 'A completely new story to Fallout: New Vegas. Experience a brand new storyline, characters, and environment, all built upon the New Vegas engine.',
    status: 'Concept Stage',
    image: 'game_banner/nw_banner.png',
    tags: ['RPG', 'FPS', 'Indie'],
    purchaseUrl: '',
    disablePurchase: true
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

        <div className="games-grid">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-gray/10 transition-all duration-300 card-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full object-contain transition-transform duration-500"
                  style={{ minHeight: '192px' }} /* 48 * 4 = 192px min-height instead of h-48 */
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold">{game.title}</h3>
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-sm text-purple-300 border-purple-500/30 dark:bg-purple-500/20 dark:text-purple-300 bg-purple-50 text-purple-700 border-purple-200"
                  >
                    {game.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 font-medium">{game.description}</p>

                {!game.disablePurchase && (
                  <p className="text-blue-600 mb-4 italic">
                    <a target="_blank" href={game.purchaseUrl} rel="noreferrer">
                      Get {game.title}
                    </a>
                  </p>
                )}

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