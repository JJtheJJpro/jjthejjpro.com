// src/routes/Home/Home.tsx
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <span className={styles.badge}>badge</span>
            <h1 className={styles.title}>header</h1>
            <p className={styles.subtitle}>
                text
            </p>
        </div>
    );
}