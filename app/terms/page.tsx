import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'Our Terms and Conditions for Shocked Future Studios.',
};

// Reusable styles for the legal text
const textStyles = {
    h2: "text-2xl font-semibold text-primary mt-8 mb-3",
    p: "text-on-surface-variant leading-7 mb-4",
    li: "ml-6 list-disc text-on-surface-variant",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                Terms and Conditions
            </h1>

            <p className={textStyles.p}>
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className={textStyles.p}>
                Please read these terms and conditions carefully before using Our Service.
            </p>

            <h2 className={textStyles.h2}>1. Agreement to Terms</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                By accessing or using our website, you agree to be bound by these
                Terms. If you disagree with any part of the terms, then you may not
                access the service.]
            </p>

            <h2 className={textStyles.h2}>2. Intellectual Property</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                The Service and its original content, features, and functionality are
                and will remain the exclusive property of Shocked Future Studios and
                its licensors.]
            </p>

            <h2 className={textStyles.h2}>3. Links to Other Websites</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                Our Service may contain links to third-party web sites or services
                that are not owned or controlled by Shocked Future Studios.]
            </p>

            <h2 className={textStyles.h2}>Contact Us</h2>
            <p className={textStyles.p}>
                If you have any questions about these Terms, you can contact us:
                [Your Contact Information]
            </p>
        </div>
    );
}