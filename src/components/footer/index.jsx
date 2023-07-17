import styles from './footer.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCursor} from "../../store/cursorSlice.js";

export const Footer = () => {
    const langstate = useSelector((state) => state.language.value);
    const dispatch = useDispatch();
    const handleMouseEnter = () => {
        dispatch(setCursor({ value: 1 }));
    };
    const handleMouseLeave = () => {
        dispatch(setCursor({ value: 0 }));
    };
    return(
        <div className={styles.footer}>
            <div className={styles.line}>
            </div>
            <span className={styles.info}>
                 <p>contact:</p>
                <p onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>dbaturin02@gmail.com</p>
                <span className={styles.contact}>
                <a target="_blank" href='https://t.me/m5ddddd'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <span className={styles.tg}>.</span>telegram</a>
                <a target="_blank" href='https://www.instagram.com/dimon.baturin/' onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                ><span className={styles.ig}>.</span>instagram</a>
                <a target="_blank" href='https://www.linkedin.com/in/dima-baturin-aba9ba280/'
                    onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}><span className={styles.link}>.</span>linkedIn</a>
                    </span>

            </span>
        </div>
    )
}