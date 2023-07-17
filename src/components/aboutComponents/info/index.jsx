import styles from './index.module.scss'
import {useSelector} from "react-redux";
export const Info = () => {
    const lang = useSelector(state => state.language.value)
    return(
        <div id='title' className={styles.main}>
          <span  className={styles.title}>
            {lang === 1 ?<h1>Dmytro Baturin</h1> : <h1>Батурін Дмитро</h1>}
              <p>front-end developer</p>
          </span>
          <span className={styles.description}>
              {lang === 1 ?<h1>let About_me = </h1> : <h1>let Про_мене = </h1>}
              {lang === 1 ? <p>“Hello, my name is Dmytro if be shorter Dima, i’m 18 old, now i
                  live in Poland, , but I myself am from Ukraine. Now i student Polish university Wroclaw Academy of
                  Buisness, and learning Web Development.
                  My aim, its be good Front-End Developer.
                  I’m everyday upgrade my skills, and study new technology,
                  because i want to be best in Front-End“</p>: <p>
                  «Привіт, мене звуть Дмитро, якщо скоротити Діма, мені 18 років, зараз я живу в Польщі, але сам я з України. Зараз я студент Польського університету Wroclaw Academy of Business і вивчаю веб-розробку. Моя мета — бути хорошим інтерфейсним розробником. Я щодня вдосконалюю свої навички та вивчаю нові технології, тому що хочу бути кращим у Front-End"
              </p>}
          </span>
        </div>
    )
}