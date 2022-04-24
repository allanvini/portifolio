import styles from './iconsLine.module.scss';

export default function IconsLine({children}){
    return(
        <div className={styles['icons-line-container']}>
            {children}
        </div>
    )
}