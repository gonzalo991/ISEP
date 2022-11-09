import React from "react";
import { BrowserRouter } from "react-router-dom";
import './css/app.css';
import Router from './router';
import Header from "./layout/header";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Router />
            </main>

            <footer>

            </footer>
        </BrowserRouter>
    )
}

export default App;