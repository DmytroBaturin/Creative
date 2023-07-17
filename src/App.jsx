import React, {useState} from "react";
import "./App.scss";
import { Cursor } from "./components/cursor/index.jsx";
import {Firstpage} from "./components/firstpage/index.jsx";
import {Secondpage} from "./components/secondpage/index.jsx";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {Header} from "./components/firstpage/header/index.jsx";
import {FirstPage} from "./pages/firstPage.jsx";
function App() {

    return (
        <BrowserRouter>
        <div className="main">
            <Cursor/>
            <Header/>
            <Routes>
                <Route index path='/' element={<FirstPage
                />}/>

            </Routes>

        </div>
        </BrowserRouter>
    );
}

export default App;
