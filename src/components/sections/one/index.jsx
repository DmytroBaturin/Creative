import styles from './sectionOne.module.scss'

export const SectionOne = () => {
    return(
        <div id='slide' className={styles.section}>
            <h1>Who am i?</h1>
            <div className={styles.img}>
            </div>
            <h1 className={styles.main}>Who</h1>
        </div>
    )
}