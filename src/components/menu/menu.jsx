import styles from './menu.module.scss';

import TypeWriter from '../typeWriter/typeWriter';

export default function Menu() {
    return (
        <nav className={styles['menu-container']}>
            <div className={styles['logo-container']}>
                <TypeWriter>
                    Allan Vinicius Dev.
                </TypeWriter>
            </div>
            <div className={styles['buttons-container']}>
                <a href="#about">Sobre</a>
                <a href="#skills">Skills</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    )
}