import { Link } from "react-router-dom"

import "./Page404.css"


export default function Page404() {

    return (
        <>
            <article className="page-404 flex-col">
                <h1>Страница не найдена</h1>
                <h4>Ошибка 404</h4>
                <Link to={"/"} id="page-404-button">На главную</Link>
            </article>
        </>
    )
}
