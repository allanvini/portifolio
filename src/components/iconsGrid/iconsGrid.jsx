import styles from './iconsGrid.module.scss';

export default function IconsGrid({children}){
    return (
        <div className={styles['grid-container']}>
            {children}
        </div>
    )
}