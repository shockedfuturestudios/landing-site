'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enigmaAuth } from '@/lib/enigmaClient';
import styles from '../auth.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const { error } = await enigmaAuth.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            router.push('/profile');
            router.refresh(); // Ensure navbar updates
        }
    };

    const handleOAuth = async (provider: 'github' | 'discord') => {
        await enigmaAuth.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    <span className={styles.brandName}>ENIGMA</span> AUTH
                </h1>
                <p className={styles.subtitle}>Sign in to access your account</p>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <form onSubmit={handleEmailLogin} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                        placeholder="operative@shockedfuture.com"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        required
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    INITIATE SEQUENCE
                </button>
            </form>

            <div className={styles.divider}>OR CONTINUE WITH</div>

            <div className={styles.socialButtons}>
                <button
                    onClick={() => handleOAuth('github')}
                    className={`${styles.socialButton} ${styles.github}`}
                >
                    GitHub
                </button>
                <button
                    onClick={() => handleOAuth('discord')}
                    className={`${styles.socialButton} ${styles.discord}`}
                >
                    Discord
                </button>
            </div>

            <p className={styles.linkText}>
                Need an identity?{' '}
                <Link href="/signup" className={styles.link}>
                    Register here
                </Link>
            </p>
        </div>
    );
}