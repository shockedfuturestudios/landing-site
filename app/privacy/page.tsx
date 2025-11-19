import Link from 'next/link';
import styles from '../legal.module.css';

export default function PrivacyPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PRIVACY POLICY</h1>
            <div className={styles.content}>
                <p>Last updated: November 18, 2025</p>
                <p className={styles.disclaimer}>
                    Shocked Future (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website and services.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We collect the following types of information:
                </p>
                <ul>
                    <li><strong>Account Information</strong>: When you sign up, we collect your email address and any other details you provide.</li>
                    <li><strong>Subscription Data</strong>: Information related to your subscription status and payment history.</li>
                    <li><strong>Technical Data</strong>: Our DNS provider and hosting platform (Vercel) automatically collect data such as:</li>
                    <ul>
                        <li>IP address</li>
                        <li>User Agent</li>
                        <li>General location</li>
                        <li>Analytics and SEO-related data for performance and optimization.</li>
                    </ul>
                </ul>

                <h2>2. How We Use Your Infromation</h2>
                <p>
                    We use your information to:
                    <ul>
                        <li>Provide authentication and access to our services.</li>
                        <li>Manage subscriptions and billing.</li>
                        <li>Improve website performance and user experience.</li>
                    </ul>
                </p>

                <h2>3. Third-Party Services</h2>
                <p>
                    We use third-party services such as:
                </p>
                <ul>
                    <li><strong>Stripe</strong> for payment processing.</li>
                    <li><strong>Supabase</strong> for authentication and database management.</li>
                    <li><strong>Vercel</strong> for hosting, deployment, and analytics.</li>
                </ul>


                <h2>4. Data Sharing</h2>
                <p>
                    We do not sell or share your personal data with third parties for marketing purposes. Data is only shared as necessary to provide our services (e.g., payment processing via Stripe).
                </p>

                <h2>5. Security of Your Information</h2>
                <p>
                    We use administrative, and technical security measures to
                    help protect your personal information. While we have taken
                    reasonable steps to secure the personal information you provide to
                    us, please be aware that no security measures are perfect or
                    impenetrable.
                </p>

                <h2>6. Your Rights</h2>
                <p>
                    You may:
                </p>
                <ul>
                    <li>Request access to your data.</li>
                    <li>Request deletion of your account and associated data. Contact us at: <strong><Link href="mailto:contact@shockedfuturestudios.com">contact@shockedfuturestudios.com</Link></strong></li>
                </ul>

                <h2>7. Cookies & Analytics</h2>
                <p>
                    Our site uses cookies and analytics tools provided by Vercel for performance monitoring and SEO optimization.
                </p>

                <h2>8. Changes To This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
                </p>

                <h2>Contact:</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <strong><Link href="mailto:contact@shockedfuturestudios.com">contact@shockedfuturestudios.com</Link></strong>
                </p>
            </div>
        </div>
    );
}