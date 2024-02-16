import { Link } from "react-router-dom"

import "./Page404.css"


export default function Page404() {

    return (
        <>
            <article className="page-404 flex-col">
                <h2>Ошибка 404</h2>
                <h3>Страница не найдена</h3>
                <Link to={"/"}>
                    <button id="page-404__button-home">На главную</button>
                </Link>
            </article>
        </>
    )
}
