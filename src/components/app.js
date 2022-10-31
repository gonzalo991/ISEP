import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import './css/app.css';
import Header from "./layout/header";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main>
            </main>

            <footer>
            </footer>
        </BrowserRouter>

    )
}

export default App;