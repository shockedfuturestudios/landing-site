import Logo from "./Logo";
import Button from "./ui/Button";

export default function Hero() {
    return (
        <section className="w-full bg-background py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4 text-center flex flex-col items-center">
                {/* Your Logo Here */}
                <Logo className="h-24 w-auto text-primary mb-6" />

                {/* Slogan */}
                <h1 className="text-3xl font-bold tracking-tight text-on-background sm:text-5xl">
                    Making yesterday's games for today's world.
                </h1>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                    Welcome to Shocked Future Studios, where nostalgia meets modern design.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button
                        href="https://www.patreon.com/" // Replace with your Patreon link
                        variant="primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Support us on Patreon
                    </Button>
                    <Button
                        href="/games"
                        variant="secondary"
                    >
                        View Our Games
                    </Button>
                </div>
            </div>
        </section>
    );
}