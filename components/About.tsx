export default function About() {
    return (
        <section id="about" className="w-full bg-surface-variant py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface-variant sm:text-4xl">
                        About the Studio
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-on-surface-variant/80">
                        We are a small, passionate team of developers and artists
                        dedicated to crafting unique game experiences. Inspired by the classics
                        we grew up with, we aim to bring that same sense of wonder and fun
                        to a new generation of players on modern platforms.
                    </p>
                </div>
                {/* You could add team member bios or more details here */}
            </div>
        </section>
    );
}