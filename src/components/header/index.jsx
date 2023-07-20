import styles from './header.module.scss';
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <span className={styles.header}>
      <span className={styles.language}>
          <Link
              style={{
              textDecoration: "none"
          }} to='/'><h1 className='hoverable'
              style={{
                  fontWeight: 400
              }}
          >creative.</h1></Link>
      </span>
      <span className={styles.navbar}>
        <Link to='/about' style={{
            color: "white",
            textDecoration: "none"
        }} className='hoverable'>more about me.</Link>
      </span>
    </span>
    );
};
