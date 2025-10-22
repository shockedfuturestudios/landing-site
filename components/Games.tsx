"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const supabase = createClient(
  "https://hevrjknbnapqqxkejozd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldnJqa25ibmFwcXF4a2Vqb3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNTA1OTAsImV4cCI6MjA3NjYyNjU5MH0.gPhZ1uwv4XjjOZKiLRw1gQVc79HD6S6c5mwN1Td_tSA"
);

type Game = {
  id: string;
  title: string;
  description: string;
  cover_image_url: string;
  purchase_url: string;
  disable_purchase: boolean;
  status: string;
  tags: string[];
};

function GameSection() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("games").select("*");
      if (error) {
        console.error("Error fetching games:", error);
      } else {
        setGames(data || []);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="py-10 sm:py-20 md:py-32" id="games">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Our Games
        </h2>
        {games.length === 0 ? (
          <p className="text-center text-slate-300">No games available yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
  <motion.div
    key={game.id}
    className="bg-slate-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Cover Image */}
    <div className="relative w-full h-48 mb-4">
  <img
    src={game.cover_image_url || "/ShockedFuture_PlaceholderImage.png"}
    alt={game.title}
    className="w-full h-full object-cover rounded-md"
  />
  {game.status && (
    <div className="absolute top-3 right-2 bg-slate-800/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
      {game.status}
    </div>
  )}
</div>
    <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
    <p className="text-slate-300 mb-2">{game.description}</p>
    {/* Tags */}
    {game.tags && Array.isArray(game.tags) && game.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {game.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="bg-slate-700 text-slate-200 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Purchase Link */}
    {!game.disable_purchase && game.purchase_url && (
      <a
        href={game.purchase_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition"
      >
        Buy Now
      </a>
    )}
  </motion.div>
))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GameSection;
``