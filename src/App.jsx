// Импорт основных библиотек
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "./components/Context"

// Импорт стилей
import "./styles/style.css";
import "./App.css";
import "./App-phone.css";

// import BaseLoyout from "./components/BaseLoyout/BaseLoyout"
import Home from "./components/PageHome/PageHome"

import Error404 from "./components/Page404/Page404"



export default function App() {
    const Context = useContext(DataContext)

    return (
        <>
            <DataContext.Provider value={Context}>
                <Routes>
                    {/* <Route path="/" element={<BaseLoyout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<p>test</p>} />

                    </Route> */}

                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </DataContext.Provider>
        </>
    )
}