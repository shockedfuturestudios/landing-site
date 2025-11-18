import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLogoContainer}>
        <Image
          src="/logo.svg"
          alt="Shocked Future Studios Logo"
          width={450}
          height={120}
          className={styles.heroLogo}
          priority
        />
      </div>
      <h3 className={styles.title}>
        Reengineering yesterday's classics for tomorrow's gamers.
      </h3>
      <p className={styles.subtitle}>
        We rebuilt the worlds you forgot.
      </p>
      <Link href="/games" className={styles.ctaButton}>
        EXPLORE OUR GAMES
      </Link>
    </div>
  );
}