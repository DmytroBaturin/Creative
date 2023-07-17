import styles from './footer.module.scss'

export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.line}>
            </div>
            <span className={styles.info}>
                 <p>contact:</p>
                <p>dbaturin02@gmail.com</p>
                <span className={styles.contact}>
                <p><span className={styles.tg}>.</span>telegram</p>
                <p><span className={styles.ig}>.</span>instagram</p>
                <p><span className={styles.link}>.</span>linkedIn</p>
                    </span>

            </span>
        </div>
    )
}