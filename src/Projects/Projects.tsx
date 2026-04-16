import styles from './Projects.module.css';

export default function Projects() {
    return (
        <>
            <p className={styles.title}>This is where all of my projects will be listed, and I have many.</p>
            <details className={styles.list}>
                <summary className={styles.dos}>DOS-GAMES</summary>
                <a className={styles.bst} href="/downloads/dos-games/SpellingJungleInstaller.exe" download="SpellingJungleInstaller.exe">Spelling Jungle</a>
            </details>
        </>
    )
}