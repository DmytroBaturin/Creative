import styles from './sectionTwo.module.scss'
export const SectionTwo = () => {
    return(
        <div className={styles.section}>
            <div className={styles.textcontent}>
            <div className={styles.title}>
            <h1>My name's Baturin Dmytro</h1>
            <p>I'm front end developer</p>
            </div>
                <p className={styles.text}>I'm 18 years old, I live in Poland at the moment, but I'm from Ukraine, I've been learning programming for a year now and I don't stop improving my skills, this site is aimed at showing my skills, which you can see below, it will help you understand what I'm capable of!</p>
                <p style={{
                    marginTop: '10px',
                    fontWeight: '500',
                    color: 'blue'
                }}
                className={styles.link}>more...</p>
            </div>
        </div>
    )
}