import React from "react";
import { HashRouter } from "react-router-dom";
import './css/app.css';
import Router from './router';
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
    return (
        <HashRouter>
            <Header />

            <main>
                <Router />
            </main>

            <Footer />
        </HashRouter>
    )
}

export default App;