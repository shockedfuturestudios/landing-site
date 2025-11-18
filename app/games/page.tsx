import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import styles from './games.module.css';

// Define a type for your game data (now with nullable fields)
type Game = {
    id: number;
    title: string;
    description: string;
    status: string;
    image: string | null;
    purchase_url: string | null;
    disable_purchase: boolean;
};

// Revalidate data every 60 seconds
export const revalidate = 60;

async function getGames() {
    // Be specific with your select statement
    const { data, error } = await supabase
        .from('games')
        .select('id, title, description, status, image, purchase_url, disable_purchase')
        .order('id', { ascending: true });

    if (error) {
        console.error('Error fetching games:', error);
        return [];
    }

    return data as Game[];
}

export default async function GamesPage() {
    const games = await getGames();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Games.</h1>

            {games.length === 0 ? (
                <p className={styles.noGames}>No games found. We are hard at work... 💾</p>
            ) : (
                <div className={styles.gamesGrid}>
                    {games.map((game) => (
                        <div key={game.id} className={styles.gameCard}>

                            {/* Image Container */}
                            <div className={styles.gameImageContainer}>
                                {game.image ? (
                                    <Image
                                        src={game.image}
                                        alt={`${game.title} cover art`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className={styles.imagePlaceholder} />
                                )}
                                <span className={styles.status}>{game.status}</span>
                            </div>

                            {/* Card Content: Title, Desc, Tags */}
                            <div className={styles.cardContent}>
                                <h2 className={styles.gameTitle}>{game.title}</h2>
                                <p className={styles.gameDescription}>{game.description}</p>
                            </div>

                            {/* Button Container (pushed to bottom) */}
                            <div className={styles.buttonContainer}>
                                {game.purchase_url ? (
                                    game.disable_purchase ? (
                                        <span className={styles.purchaseButtonDisabled}>
                                            Coming Soon
                                        </span>
                                    ) : (
                                        <a
                                            href={game.purchase_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.purchaseButton}
                                        >
                                            Buy Now
                                        </a>
                                    )
                                ) : (
                                    // No URL provided, render nothing or a disabled state
                                    <span className={styles.purchaseButtonDisabled}>
                                        Not Available
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}