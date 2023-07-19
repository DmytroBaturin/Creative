import styles from './header.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <span className={styles.header}>
      <span className={styles.language}>
          <h1
              style={{
                  fontWeight: 400
              }}
          >creative.</h1>
      </span>
      <span className={styles.navbar}>
        <a>more about me.</a>
      </span>
    </span>
    );
};
