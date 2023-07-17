import React, {useState} from "react";
import "./App.scss";
import { Cursor } from "./components/cursor/index.jsx";
import {Firstpage} from "./components/firstpage/index.jsx";
import {Secondpage} from "./components/secondpage/index.jsx";
import {
    BrowserRouter,
    Route,
    Routes, useLocation
} from "react-router-dom";
import {Header} from "./components/firstpage/header/index.jsx";
import {FirstPage} from "./pages/firstPage.jsx";
import {About} from "./pages/about.jsx";
import {Footer} from "./components/footer/index.jsx";
function App() {
    return (
        <BrowserRouter>
        <div className="main">
            <Cursor/>
            <Header/>
            <Routes>
                <Route index path='/' element={<FirstPage
                />}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
