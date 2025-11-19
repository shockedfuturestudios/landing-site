import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logoContainer}>
                <Image
                    src="/logo.svg"
                    alt="Shocked Future Studios Logo"
                    width={150}
                    height={35}
                    className={styles.logoImage}
                    priority // Load the logo quickly
                />
            </Link>
            <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}>
                    Home
                </Link>
                <Link href="/about" className={styles.navLink}>
                    About
                </Link>
                <Link href="/games" className={styles.navLink}>
                    Our Games
                </Link>
            </div>
        </nav>
    );
}