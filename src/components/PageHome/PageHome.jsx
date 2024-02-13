import { useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DataContext } from "../Context"

import "./PageHome.css"
import "./PageHome-phone.css"


export default function PageHome() {
    const NavigateTo = useNavigate()
    const Context = useContext(DataContext)

    return (
        <>
            <article>
                <h4 className="page-title text-dark">Главная</h4>
                <p>Контент</p>
            </article>
        </>
    )
}
