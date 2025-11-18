import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Shocked Future Studios</h1>
            <div className={styles.content}>
                <p>
                    Founded in October 2025, Shocked Future Studios was born from a singular vision:
                    to recreate the digital experiences of the 2000s.
                    We are two designers, programmers, and storytellers obsessed
                    with the feeling and style of 2000s gaming.
                </p>
                <p>
                    Our philosophy is simple: <strong>recreate nostalgia in an industry full of slop.</strong> We believe
                    in that the games of yesterday felt more alive, and stories that were told in them.
                    In a world of noise, we recreated nostalgia.
                </p>
                <p>
                    We are rebuilding the past, one line of code at a time. Welcome to the studio.
                </p>
            </div>
        </div>
    );
}