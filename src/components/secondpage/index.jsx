import {Title} from "./title/index.jsx";
import {Skills} from "./skills/index.jsx";
import styles from "./page.module.scss"


export const Secondpage = () => {
  return(
      <div className={styles.page}>
          <Title/>
          <Skills/>
      </div>
  )
}