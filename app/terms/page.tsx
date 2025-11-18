import styles from '../legal.module.css';

export default function TermsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>TERMS & CONDITIONS</h1>
            <div className={styles.content}>
                <p>Last updated: November 17, 2025</p>
                <p className={styles.disclaimer}>
                    <strong>Disclaimer:</strong> This is subject to change and our actual practices
                    may change as this page is still in development.
                </p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    By accessing our website or using our games ("Services"), you agree
                    to be bound by these Terms and Conditions. If you do not agree to
                    these Terms, you may not use our Services.
                </p>

                <h2>2. Intellectual Property</h2>
                <p>
                    The Services and their original content, features, and functionality
                    are and will remain the exclusive property of Shocked Future Studios
                    and its licensors. Our trademarks and trade dress may not be used in
                    connection with any product or service without the prior written
                    consent of Shocked Future Studios.
                </p>

                <h2>3. Use of Our Services</h2>
                <p>
                    You agree not to use the Services:
                </p>
                <ul>
                    <li>
                        In any way that violates any applicable national or international
                        law or regulation.
                    </li>
                    <li>
                        To exploit, harm, or attempt to exploit or harm minors in any way.
                    </li>
                    <li>
                        To reverse engineer, decompile, or otherwise attempt to discover
                        the source code of our games or website.
                    </li>
                </ul>

                <h2>4. Termination</h2>
                <p>
                    We may terminate or suspend your access to our Services immediately,
                    without prior notice or liability, for any reason whatsoever,
                    including without limitation if you breach the Terms.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    In no event shall Shocked Future Studios, nor its directors,
                    employees, partners, agents, suppliers, or affiliates, be liable
                    for any indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits, data, use,
                    goodwill, or other intangible losses, resulting from your access to
                    or use of or inability to access or use the Services.
                </p>

                <h2>6. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the
                    laws of [Your State/Country], without regard to its conflict of law
                    provisions.
                </p>

                <h2>7. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at:
                    [Your Contact Email]
                </p>
            </div>
        </div>
    );
}