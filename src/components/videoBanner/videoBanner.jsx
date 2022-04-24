import styles from './videoBanner.module.scss';

export default function VideoBanner({ video }) {
    return (
        <video src={video} autoPlay muted loop className={styles['video-banner']} />
    )
}