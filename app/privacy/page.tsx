import Link from 'next/link';
import styles from '../legal.module.css';

export default function PrivacyPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PRIVACY POLICY</h1>
            <div className={styles.content}>
                <p>Last updated: November 17, 2025</p>
                <p className={styles.disclaimer}>
                    <strong>Disclaimer:</strong> This is subject to change and our actual practices
                    may change as this page is still in development.
                </p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to Shocked Future Studios. We are committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website and play our
                    games.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                    We may collect information about you in a variety of ways. The
                    information we may collect on the Site includes:
                </p>
                <ul>
                    <li>
                        <strong>Personal Data:</strong> Personally identifiable information,
                        such as your name, email address, and demographic information, that
                        you voluntarily give to us when you register with the Site or our
                        games, or when you choose to participate in various activities
                        related to the Site and our games, such as online chat and message
                        boards.
                    </li>
                    <li>
                        <strong>Derivative Data:</strong> Information our cloud services
                        automatically collect when you access the Site, such as your IP
                        address, your browser type, your operating system, your access
                        times, and the pages you have viewed directly before and after
                        accessing the Site.
                    </li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>
                    Having accurate information about you permits us to provide you with
                    a smooth, efficient, and customized experience. Specifically, we may
                    use information collected about you via the Site or our games to:
                </p>
                <ul>
                    <li>Email you regarding your account or order.</li>
                    <li>Improve our website and game offerings.</li>
                    <li>Monitor and analyze usage and trends to improve your experience.</li>
                    <li>Notify you of updates to our games and services.</li>
                </ul>

                <h2>4. Data Sharing</h2>
                <p>
                    We do not share, sell, rent, or trade your personal information with
                    third parties for their commercial purposes.
                </p>

                <h2>5. Security of Your Information</h2>
                <p>
                    We use administrative, technical, and physical security measures to
                    help protect your personal information. While we have taken
                    reasonable steps to secure the personal information you provide to
                    us, please be aware that no security measures are perfect or
                    impenetrable.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please
                    contact us at: <Link href="mailto:contact@shockedfuturestudios.com">contact@shockedfuturestudios.com</Link>
                </p>
            </div>
        </div>
    );
}