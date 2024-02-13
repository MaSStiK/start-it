// Импорт основных библиотек
import { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "./components/Context"

// Импорт стилей
import "./styles/style.css";
import "./App.css";
import "./App-phone.css";

import Home from "./components/PageHome/PageHome"


export default function App() {
    const Context = useContext(DataContext)

    return (
        <>

            <DataContext.Provider value={Context}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </DataContext.Provider>
        </>
    )
}