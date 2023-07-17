import styles from './image.module.scss'
import img from '../../../img/photo.jpg'
import {useEffect} from "react";
import {gsap} from "gsap";
export const ImageSec = () => {
  return(
      <>
          <div id='photo' className={styles.container}>
          <div className={styles.img}></div>
          </div>
      </>
  )
}
