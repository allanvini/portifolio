import styles from './sectionItem.module.scss';

export default function SectionItem({children, style={}}){
    return (
        <div style={{...style}} className={styles['section-item']}>
            {children}
        </div>
    )
}