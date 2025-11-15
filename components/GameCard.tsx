import Image from 'next/image';
import Button from './ui/Button';

// Define the type to match the new schema
type Game = {
    id: string;
    title: string;
    description: string | null;
    status: string | null;
    image: string | null;
    tags: string[] | null;
    purchase_url: string | null;
    disable_purchase: boolean;
};

type GameCardProps = {
    game: Game;
};

export default function GameCard({ game }: GameCardProps) {

    // This is the new conditional logic
    const showPurchaseButton = !game.disable_purchase && game.purchase_url;

    return (
        <div className="bg-surface-variant text-on-surface-variant rounded-xl shadow-lg flex flex-col overflow-hidden transition-transform hover:scale-[1.02]">

            {/* Game Image */}
            {game.image && (
                <div className="relative w-full aspect-video bg-outline">
                    <Image
                        src={game.image}
                        alt={game.title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">

                {/* Status Badge */}
                {game.status && (
                    <span className="mb-2 inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-medium self-start">
                        {game.status}
                    </span>
                )}

                <h3 className="text-2xl font-semibold text-on-primary-container mb-2">
                    {game.title}
                </h3>

                <p className="text-on-surface-variant text-sm mb-4 flex-grow">
                    {game.description || "No description available."}
                </p>

                {/* Tags */}
                {game.tags && game.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {game.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Conditional Purchase Button */}
                {showPurchaseButton && (
                    <div className="mt-auto">
                        <Button
                            href={game.purchase_url!} // We know it's not null here
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full" // Make button fill width of card
                        >
                            Buy Now
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}