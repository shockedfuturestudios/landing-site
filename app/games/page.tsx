import { createClient } from "@/lib/supabase/server"; // Now importing our new function
// We no longer need: import { cookies } from "next/headers";
import GameCard from "@/components/GameCard";
import { Metadata } from "next";

// ... (Game type definition remains the same) ...

export const metadata: Metadata = {
    // ...
};

export const revalidate = 60;

export default async function GamesPage() {
    // Simpler: No more cookieStore variable needed here
    const supabase = createClient();

    const { data: games, error } = await supabase
        .from("games")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        // ... (error handling remains the same) ...
    }

    if (!games || games.length === 0) {
        // ... (no games found handling remains the same) ...
    }

    return (
        <div className="container mx-auto max-w-5xl px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                Our Games
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games?.map((game: any) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}