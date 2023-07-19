import styles from './header.module.scss'
export const Header = () => {
    return(
        <span className={styles.header}>
            <span className={styles.language}>
            </span>
            <span className={styles.navbar}>
                <a>about me.</a>
                <a>skills.</a>
                <a>contact.</a>
            </span>
        </span>
    )
}