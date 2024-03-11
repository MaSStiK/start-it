import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import $ from "jquery"

import "./PageBrief.css"
import "./PageBrief-phone.css"


export default function PageBrief() {
    useEffect(() => {
        document.title = "Бриф"
    }, [])

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        window.onresize = () => setWindowWidth(window.innerWidth)
    }, [])

    function handleServiceClick(event) {
        $(event.target).toggleClass("active")
    }

    function handleBudgetClick(event) {
        $(event.target).addClass("active").siblings().removeClass("active");
    }

    return (
        <>
            <article>
                <section className="brief-nav flex-col">
                    <Navigation />
                </section>
                
                <section className="brief-title_big flex-col">
                    <h1>Заполните бриф</h1>
                    <h2>Оставьте нам заявку, либо свяжитесь через <Link to={"#"}>телеграм.</Link></h2>
                </section>

                <section className="brief-service">
                    <h2>Услуги</h2>
                    <div className="brief__buttons-container flex-row">
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Веб-дизайн</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Разработка</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>
                            {windowWidth > 978 ? "Дизайн мобильных приложений" : "Дизайн моб. прил."}
                        </button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>CRM</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Дизайн системы</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Сайт с нуля</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>MVP</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Редизайн</button>
                        <button className="button-brief" onClick={(e) => {handleServiceClick(e)}}>Другое</button>
                    </div>
                </section>

                <section className="brief-budget">
                    <h2>Бюджет</h2>
                    <div className="brief__buttons-container flex-row">
                        <button className="button-brief" onClick={(e) => {handleBudgetClick(e)}}>50-150 тыс</button>
                        <button className="button-brief" onClick={(e) => {handleBudgetClick(e)}}>до 500 тыс</button>
                        <button className="button-brief" onClick={(e) => {handleBudgetClick(e)}}>от 1 млн</button>
                    </div>
                </section>

                <section className="brief-tasks">
                    <h2>Задача</h2>
                    <textarea className="brief-tasks__textarea" placeholder="Описание"
                        onInput={(event) => {
                            // Увеличение textarea
                            event.target.style.height = "10px";
                            event.target.style.height = event.target.scrollHeight + "px"
                        }}>
                    </textarea>

                    <button className="button-brief button-brief_thin">Прикрепить файл</button>
                </section>

                <section className="brief-form">
                    <h2>Контактные данные</h2>

                    <form className="flex-row">
                        <input type="text" placeholder="Имя" maxLength={100} />
                        <input type="text" placeholder="Компания" maxLength={200} />
                        <input type="email" placeholder="Email" maxLength={100} />
                        <input type="tel" placeholder="Телефон" maxLength={100} />
                        
                        <div className="brief-form__button-wrapper flex-col">
                            <button className="brief-form__button" type="submit">Заполнить бриф</button>
                        </div>
                    </form>
                </section>
            </article>
        </>
    )
}
