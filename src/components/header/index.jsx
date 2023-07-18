import styles from './header.module.scss'
export const Header = () => {
    return(
        <span className={styles.header}>
            <span className={styles.language}>
                <button>eng</button>
                <p>/</p>
                <button>ua</button>
            </span>
            <span className={styles.navbar}>
                <a>about me.</a>
                <a>skills.</a>
                <a>contact.</a>
            </span>
        </span>
    )
}