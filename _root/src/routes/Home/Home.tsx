// src/routes/Home/Home.tsx
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <span className={styles.badge}>Welcome</span>
            <h1 className={styles.title}>JJ's Website</h1>
            <p className={styles.subtitle}>
                Failure and Success may be opposites, but they are far from enemies.<br/>They are misunderstood siblings.
            </p>
        </div>
    );
}