'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import styles from '../auth.module.css';

export default function ProfilePage() {
    const { user, loading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>Loading Enigma Protocol...</div>;
    if (!user) return null;

    return (
        <div className={styles.profileContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>OPERATIVE PROFILE</h1>
                <p className={styles.subtitle}>Access Level: GRANTED</p>
            </div>

            <div className={styles.profileDetail}>
                <p><strong>UUID:</strong> {user.id}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at!).toLocaleString()}</p>
                <p><strong>Provider:</strong> {user.app_metadata.provider}</p>
            </div>

            <button onClick={signOut} className={styles.signOutButton}>
                TERMINATE SESSION
            </button>
        </div>
    );
}