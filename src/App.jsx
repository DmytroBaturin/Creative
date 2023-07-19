import React from "react";
import "./App.scss";
import { Header } from "./components/header/index.jsx";
import { Cursor } from "./components/cursor/index.jsx";
import { Line } from "./components/line/index.jsx";
import {gsap} from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import {Footer} from "./components/footer/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page1} from "./page/pageOne/index.jsx";
import {PageTwo} from "./page/pageTwo/index.jsx";
gsap.registerPlugin(ScrollTrigger)
function App() {
    return (
        <>
            <BrowserRouter>
            <Cursor/>
            <Line/>
                <Header />
                <Routes>
                    <Route index path='/' element={<Page1/>}></Route>
                    <Route  path='/about' element={<PageTwo/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
