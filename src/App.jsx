import React, { useEffect, useRef } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/index.jsx";
import { Title } from "./components/title/index.jsx";
import { Cursor } from "./components/cursor/index.jsx";
import { Line } from "./components/line/index.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
    const pagesRef = useRef([]);
    gsap.registerPlugin(ScrollTrigger);
    return (
        <BrowserRouter>
            <div>
                <div ref={(ref) => (pagesRef.current[0] = ref)} className="page">
                    <Cursor />
                    <Header />
                    <Title />
                    <Line pageRef={pagesRef.current} />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
