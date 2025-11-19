import styles from '../legal.module.css';

export default function TermsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TERMS & CONDITIONS</h1>
            <div className={styles.content}>
                <p>Last updated: November 18, 2025</p>
                <p className={styles.disclaimer}>
                    Welcome to Shocked Future (“we,” “our,” or “us”). By accessing or using our website and services, you agree to these Terms & Conditions. Please read them carefully.
                </p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    By creating an account, subscribing to, or using our games ("Services"), you agree to and will comply with these Terms & Conditions. If you do not agree, you must discontinue use immediately.
                </p>

                <h2>2. Accounts</h2>
                <ul>
                    <li>You are responsible for maintaining the confidentiality of your account's credentials.</li>
                    <li>You agree to provide accurate and complete information during registration.</li>
                    <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
                </ul>

                <h2>3. Subscriptions & Payments</h2>
                <ul>
                    <li>Subscription tiers and pricing are displayed on our website and during checkout.</li>
                    <li>Payments are processed securely through <strong>Stripe</strong></li>
                    <li>All fees are <strong>nonrefundable</strong> unless otherwise stated.</li>
                    <li>You may cancel your subscription at any time; access will continue until the end of the billing cycle.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <ul>
                    <li>All content, including games, assets, and website materials, is owned by Shocked Future unless otherwise noted.</li>
                    <li>You may not copy, distribute, or modify our content without prior written consent.</li>
                    <li><strong>Source Code Policy:</strong></li>
                    <p>Any code that we have not explicitly made source-available or open-source is proprietary. If <strong>any</strong> individual or entity makes such code publicly available without our consent, we reserve the right to issue DMCA takedown notices and pursue legal remedies.</p>
                </ul>

                <h2>5. User Conduct</h2>
                <p>
                    You agree to not:
                </p>
                <ul>
                    <li>Use the Services for any unlawful purposes; Shocked Future is not responsible for any and all legal consequences of doing so.</li>
                    <li>Share or distribute harmful content.</li>
                    <li>Interfere with the operation of the Services.</li>
                    <li>Attempt to gain unauthorized access to any part of the Services.</li>
                </ul>

                <h2>6. Third-Party Services</h2>
                <p>
                    We use third-party services such as <strong>Stripe</strong>, <strong>Supabase</strong>, and <strong>Vercel</strong>. Their terms and policies apply to their respective services. We are not responsible for data or policies from those services.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                    We provide our Services "as is" without warranties of any kind. Shocked Future shall not be liable for any damages arising from the use or inability to use the Services.
                </p>

                <h2>8. Termination</h2>
                <p>
                    We may suspend or terminate your account and/or subscription if you violate these terms or engage in harmful activity. Accounts that are terminated are <strong>not</strong> subject to refunds; look at chapter 3 for more details.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Utah, United States, without regard to its conflict of laws principles. Shocked Future complies with all applicable Utah state regulations.
                </p>

                <h2>10. Changes to Terms</h2>
                <p>
                    We may update these Terms & Conditions from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the Services after changes constitutes acceptance of the new terms.
                </p>
            </div>
        </div>
    );
}