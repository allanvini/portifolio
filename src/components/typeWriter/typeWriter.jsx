import styles from './typeWriter.module.scss';

export default function TypeWriter({children}){
    return (
        <h1 className={styles['type-writer']}>
            {children}
        </h1>
    )
}