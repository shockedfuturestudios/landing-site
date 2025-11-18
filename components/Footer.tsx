import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <Link href="/privacy" className={styles.footerLink}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className={styles.footerLink}>
                        Terms & Conditions
                    </Link>
                </div>
                <p className={styles.copyright}>
                    © {currentYear} Shocked Future Studios. All rights reserved.
                </p>
            </div>
        </footer>
    );
}