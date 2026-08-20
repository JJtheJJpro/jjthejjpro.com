// src/routes/Projects/Projects.tsx
import styles from './Projects.module.css';

const projectList = [
    { id: 1, title: 'proj1', tag: 'tag1', desc: 'desc1' },
    { id: 2, title: 'proj2', tag: 'tag2', desc: 'desc2' },
];

export default function Projects() {
    return (
        <div className={styles.grid}>
            {projectList.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.header}>
                        <h3>{item.title}</h3>
                        <span className={styles.tag}>{item.tag}</span>
                    </div>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}