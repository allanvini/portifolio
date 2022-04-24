import styles from './projectCard.module.scss';

export default function ProjectCard({ projectTitle, link, children }) {
    return (
        <a href={link} target="_blank" className={styles['card']}>
            <h1>{projectTitle}</h1>
            {children}
        </a>
    )
}