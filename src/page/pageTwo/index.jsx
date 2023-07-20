import styles from './pagetwo.module.scss'
import {useEffect} from "react";
export const PageTwo = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [window.location.pathname]);
    return(
        <div className='page'>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Soon😜</h1>
                </div>
            </div>
        </div>
    )
}
