// Импорт основных библиотек
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "./components/Context"
import $ from "jquery"

// Импорт стилей
import "./styles/style.css";
import "./App.css";
import "./App-phone.css";

// import BaseLayout from "./components/BaseLayout/BaseLayout"
import Home from "./components/PageHome/PageHome"
import Brief from "./components/PageBrief/PageBrief"

import Error404 from "./components/Page404/Page404"


export default function App() {
    const Context = useContext(DataContext) // Помять приложения, устанавливаем при запуске

    const [bodyNoScroll, setBodyNoScroll] = useState(false);
    Context.bodyNoScroll = bodyNoScroll
    Context.setBodyNoScroll = setBodyNoScroll

    // Отключение прокрутки страницы
    useEffect(() => {
        if (bodyNoScroll) {
            $("body").addClass("no-scroll")
        } else {
            $("body").removeClass("no-scroll")
        }
    }, [bodyNoScroll])

    // Переход в начало страницы при смене страницы
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
      }, [pathname]);

    return (
        <>
            <DataContext.Provider value={Context}>
                <Routes>
                    {/* <Route path="/" element={<BaseLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<p>test</p>} />

                    </Route> */}

                    <Route path="/brief" element={<Brief />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </DataContext.Provider>
        </>
    )
}