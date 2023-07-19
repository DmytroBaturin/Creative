import styles from './footer.module.scss'
export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.line}></div>
            <span className={styles.info}>
                <p>contact</p>
                   <p>dbaturin02@gmail.com</p>
                <span className={styles.contacts}>
                    <a target='_blank' href='https://www.instagram.com/dimon.baturin/'><span className={styles.ig}>.</span>instagram</a>
                     <a target='_blank' href='https://t.me/m5ddddd'><span className={styles.tg}>.</span>telegram</a>
                     <a target='_blank' href='https://www.linkedin.com/in/dima-baturin-aba9ba280/'><span className={styles.ln}>.</span>linkedin</a>
                </span>
            </span>
        </div>
    )
}
