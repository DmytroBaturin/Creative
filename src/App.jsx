import React, {useEffect, useLayoutEffect, useRef} from "react";
import "./App.scss";
import { Header } from "./components/header/index.jsx";
import { Title } from "./components/title/index.jsx";
import { Cursor } from "./components/cursor/index.jsx";
import { Line } from "./components/line/index.jsx";
import {gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger} from "gsap/ScrollTrigger";
import {Footer} from "./components/footer/index.jsx";
import {SectionOne} from "./components/sections/one/index.jsx";
import {SectionTwo} from "./components/sections/two/index.jsx";
import {Blocks} from "./components/blocks/index.jsx";

function App() {
    const pagesRef = useRef([]);
    const slider = useRef();
    const panels = useRef([]);


    useEffect(() => {
       const scroll = gsap.to(panels.current, {
            xPercent: -100 * (panels.current.length + 1),
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: '.container',
                pin: true,
                start: 'center center',
                snap: 1 / (panels.current.length - 1),
                scrub: -2,
                end: () => "=+ 2007"
            }
        }
        );
    }, []);


    return (
        <>
            <Cursor/>
            <Line pageRef={pagesRef.current} />
            <div className="pages">
            <Header />
                <div ref={(ref) => (pagesRef.current[0] = ref)} className="page">
                    <Title />
                </div>
                <div ref={slider} className='container'>
                    <div style={{
                        height: '120vh',
                        backgroundColor: 'white'
                    }}
                        ref={(ref) => (panels.current[1] = ref)} className='panel'>
                        <SectionTwo/>
                    </div>
                    <div ref={(ref) => (panels.current[2] = ref)} className='panel'>
                        <SectionOne/>
                    </div>
                </div>
              <Blocks/>
            <Footer/>
            </div>
        </>
    );
}

export default App;
