import styles from './header.module.scss';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Header = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const showAnim = gsap.from('#main-tool-bar', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 3300,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });
        return () => showAnim.kill()
    })

    return (
        <span id='main-tool-bar' className={styles.header}>
            <div className={styles.headercontainer}>
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
                </div>
    </span>
    );
};
