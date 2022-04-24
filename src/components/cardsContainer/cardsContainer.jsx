import styles from './cardsContainer.module.scss';


export default function CardsContainer({children}){
    return (
        <div className={styles['grid']}>
            {children}
        </div>
    )
}