import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import styles from "./titlepage.module.scss";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useDispatch, useSelector } from "react-redux";
import { setCursor } from "../../../store/cursorSlice.js";

gsap.registerPlugin(TextPlugin);

export const TitlePage = () => {
    const dispatch = useDispatch();
    const langstate = useSelector((state) => state.language.value);
    const messageBodyStr =
        langstate === 1 ? "All what you must know about me." : "Все що вам потрібно знати про мене.";
    const arrow = useRef(null);
    const title = useRef(null);
    const scrollTo = () => {
        window.scroll({
            top: 670,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.from(arrow.current, {
            yPercent: 10,
            ease: "power1",
            yoyoEase: true,
            duration: 1,
        }).to(arrow.current, {
            yPercent: -10,
            ease: "power1",
            duration: 1,
            yoyoEase: true,
            repeat: -1,
        });
    }, []);

    const masterTL = useMemo(() => {
        const tl = gsap.timeline({ repeat: 0 });
        for (let i = 0; i < messageBodyStr.length; i++) {
            tl.to(title.current, {
                duration: 0.17,
                text: {
                    value: messageBodyStr.substr(0, i + 1),
                    delimiter: "",
                },
            });
        }
        return tl;
    }, []);

    return (
        <>
            <h1 ref={title} className={styles.title}>
                {messageBodyStr}
            </h1>
            <svg
                onClick={scrollTo}
                onMouseEnter={() => {
                    dispatch(setCursor({ value: 1 }));
                }}
                onMouseLeave={() => {
                    dispatch(setCursor({ value: 0 }));
                }}
                ref={arrow}
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="91"
                viewBox="0 0 8 91"
                fill="none"
            >
                <path
                    d="M3.64645 90.3536C3.84171 90.5488 4.15829 90.5488 4.35355 90.3536L7.53553 87.1716C7.7308 86.9763 7.7308 86.6597 7.53553 86.4645C7.34027 86.2692 7.02369 86.2692 6.82843 86.4645L4 89.2929L1.17157 86.4645C0.976311 86.2692 0.659728 86.2692 0.464466 86.4645C0.269204 86.6597 0.269204 86.9763 0.464466 87.1716L3.64645 90.3536ZM3.5 0L3.5 90H4.5L4.5 0L3.5 0Z"
                    fill="white"
                />
            </svg>
        </>
    );
};
