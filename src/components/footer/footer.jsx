import styles from './footer.module.scss';
import TypeWriter from "../typeWriter/typeWriter";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className='typeWriterDelimiter'>
                <TypeWriter>Allan Vinicius Dev.</TypeWriter>
            </div>
            <p>
                Criado e desenvolvido por <a href='https://github.com/allanvini' target='_blank'>Allan Vinicius</a>, <a href='https://github.com/allanvini/portifolio' target='_blank'>repo</a>
            </p>
        </div>
    )
}