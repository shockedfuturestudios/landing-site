import Button from "./ui/Button";

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-background py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-on-background sm:text-4xl">
                    Get in Touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                    Have a question, a proposal, or just want to say hi?
                    We'd love to hear from you.
                </p>
                <div className="mt-10">
                    <Button
                        href="mailto:contact@shockedfuture.com" // Replace with your email
                        variant="primary"
                    >
                        Email Us
                    </Button>
                </div>
            </div>
        </section>
    );
}