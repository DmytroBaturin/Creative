import {Title} from "../../components/title/index.jsx";
import {SectionTwo} from "../../components/sections/two/index.jsx";
import {SectionOne} from "../../components/sections/one/index.jsx";
import {Blocks} from "../../components/blocks/index.jsx";
import React, {useEffect, useRef, useMemo} from "react";
import {gsap} from "gsap";

export const Page1 = () => {
    const pagesRef = useRef([]);
    const slider = useRef();
    const panels = useRef([]);
    useEffect(() => {

        const scroll = gsap.to(panels.current, {
            xPercent: -100 * (panels.current.length + 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.container',
                pin: true,
                start: 'center center',
                scrub: -2,
                end: () => "=+ 2007"
            }
        })
        const backgroundColorTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                start: "top center",
                end: "90%",
                scrub: -2,
            },
        });
        backgroundColorTimeline
            .to(".page2", {
                duration: 1,
                backgroundColor: 'white'})
            .to(".page2", {
                duration: 1,
                backgroundColor: '#0C0C0C'})

        return () => {
            backgroundColorTimeline.kill()
        }
    }, []);
    return(
        <div className="pages">
            <div ref={(ref) => (pagesRef.current[0] = ref)} className="page">
                <Title />
            </div>
            <div ref={slider} className='container'>
                <div id='selection1' style={{
                    height: '110vh',
                    background: '#0C0C0C'
                }}
                     ref={(ref) => (panels.current[1] = ref)} className='panel page2'>
                    <SectionTwo/>
                </div>
                <div ref={(ref) => (panels.current[2] = ref)} className='panel page3'>
                    <SectionOne/>
                </div>
            </div>
            <Blocks/>
        </div>
    )
}