import styles from './image.module.scss'
import img from '../../../img/photo.jpg'
export const ImageSec = () => {
  return(
      <>
          <div className={styles.container}>
              <h1>&lt;img/&gt;</h1>
              <h2>&lt;img&gt;</h2>
              <div className={styles.wrapper}></div>
          <div className={styles.image}>
          </div>
          </div>
      </>
  )
}
