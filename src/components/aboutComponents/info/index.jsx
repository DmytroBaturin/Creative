import styles from './index.module.scss'
export const Info = () => {
    return(
        <div className={styles.main}>
          <span className={styles.title}>
              <h1>Dmytro Baturin.</h1>
              <p>front-end developer</p>
          </span>
          <span className={styles.description}>
              <h1>let About_me = </h1>
              <p>  “Hello, my name is Dmytro if be shorter Dima, i’m 18 old, now i
live in Poland, , but I myself am from Ukraine. Now i student Polish university  Wroclaw Academy of Buisness, and learning Web Development.
My aim, its be good Front-End Developer.
 I’m everyday upgrade my skills, and study new technology,
because i want to be best in Front-End“</p>
          </span>
        </div>
    )
}