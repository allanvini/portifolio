import styles from './section.module.scss';

export default function Section({children, id}){
    return (
        <div id={id} className={styles['section-container']}>
            {children}
        </div>
    )
}