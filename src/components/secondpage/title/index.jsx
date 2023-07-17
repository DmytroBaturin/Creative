import styles from './title.module.scss'
export const Title = () => {
    return(
        <div id='title' className={styles.title}>
            <span className={styles.content}>
            <p>about.</p>
            <h1>My Skills</h1>
                </span>
        </div>
    )
}