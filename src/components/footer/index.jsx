import styles from './footer.module.scss'
export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.line}></div>
            <span className={styles.info}>
                <p>contact</p>
                   <p>dbaturin02@gmail.com</p>
                <span className={styles.contacts}>
                    <a><span className={styles.ig}>.</span>instagram</a>
                     <a><span className={styles.tg}>.</span>telegram</a>
                     <a><span className={styles.ln}>.</span>linkedin</a>
                </span>
            </span>
        </div>
    )
}
