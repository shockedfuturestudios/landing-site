import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Our Privacy Policy for Shocked Future Studios.',
};

// Reusable styles for the legal text
const textStyles = {
    h2: "text-2xl font-semibold text-primary mt-8 mb-3",
    p: "text-on-surface-variant leading-7 mb-4",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                Privacy Policy
            </h1>

            <p className={textStyles.p}>
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <p className={textStyles.p}>
                Your privacy is important to us. It is Shocked Future Studios' policy to
                respect your privacy regarding any information we may collect from you
                across our website, {`https://yourwebsite.com`}, and other sites we own
                and operate.
            </p>

            <h2 className={textStyles.h2}>1. Information We Collect</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                Log data, cookies, personal information (e.g., via contact forms), etc.]
            </p>

            <h2 className={textStyles.h2}>2. How We Use Your Information</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                To provide and maintain our services, to notify you about changes, to
                provide customer support, etc.]
            </p>

            <h2 className={textStyles.h2}>3. Cookies</h2>
            <p className={textStyles.p}>
                [...Replace this with your actual policy...
                We use cookies to... etc.]
            </p>

            <h2 className={textStyles.h2}>Contact Us</h2>
            <p className={textStyles.p}>
                If you have any questions about this Privacy Policy, you can contact us:
                [Your Contact Information]
            </p>
        </div>
    );
}