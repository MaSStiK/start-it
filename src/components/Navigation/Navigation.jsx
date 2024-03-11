
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../Context"

import imgLogo from "../../assets/logo/logo-text.svg"
import imgMenu from "../../assets/icons/menu.svg"

import "./Navigation.css"
import "./Navigation-phone.css"


export default function Navigation() {
    const Context = useContext(DataContext)

    // При нажатии на кнопку навигации меню либо откроется либо закроется
    function handleNavButton() {
        Context.setBodyNoScroll(!Context.bodyNoScroll)
    }

    return (
        <>
            <nav className="flex-row">
                <Link to={"/"} className="nav__logo-wrapper">
                    <img src={imgLogo} alt="logo" />
                </Link>
                
                <ul className="flex-row">
                    <li>
                        <Link to={"#"} className="nav__link">Главная</Link>
                    </li>
                    <li>
                        <Link to={"#"} className="nav__link">О нас</Link>
                    </li>
                    <li>
                        <Link to={"#"} className="nav__link">Стоимость</Link>
                    </li>
                    <li>
                        <Link to={"#"} className="nav__link">Условия работы</Link>
                    </li>
                    <li>
                        <Link to={"#"} className="nav__link">Контакты</Link>
                    </li>
                </ul>

                {/* Телефонная кнопка навигации */}
                <button className="nav__menu-button-open" onClick={handleNavButton}>
                    <img src={imgMenu} alt="menu" />
                </button>
            </nav>

            {/* Окно меню навигации */}
            {Context.bodyNoScroll &&
                <div className="nav-menu">
                    <div className="nav-menu__content">
                        <Link to={"/"} className="nav-menu__logo-wrapper" onClick={handleNavButton}>
                            <img src={imgLogo} alt="logo" />
                        </Link>

                        <ul className="flex-col">
                            <li>
                                <Link to={"/"} className="nav__link" onClick={handleNavButton}>Главная</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="nav__link" onClick={handleNavButton}>О нас</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="nav__link" onClick={handleNavButton}>Стоимость</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="nav__link" onClick={handleNavButton}>Условия работы</Link>
                            </li>
                            <li>
                                <Link to={"#"} className="nav__link" onClick={handleNavButton}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
        
    )
}
