import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.main}>
                <p className={styles.title}>Welcome to JJ's website!</p>
                <p className={styles.text}>
                    Here's my discord server: <a href='https://discord.gg/uB3yDDsKqD'>https://discord.gg/uB3yDDsKqD</a>
                </p>
            </div>
        </>
    )
}