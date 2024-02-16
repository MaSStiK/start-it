import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { DataContext } from "../Context"
import imgLogo from "../../assets/logo/logo-text.svg"
import imgLogoSI from "../../assets/logo/logo-home-445.svg"
import imgBehance from "../../assets/icons/behance-black.svg"
import imgTelegram from "../../assets/icons/telegram-black.svg"
import imgWhatsapp from "../../assets/icons/whatsapp-black.svg"

import "./PageHome-header.css"
import "./PageHome-brief.css"
import "./PageHome-info.css"
import "./PageHome-projects.css"
import "./PageHome-services.css"
import "./PageHome-footer.css"

import "./PageHome-phone.css"

export default function PageHome() {
    // const Context = useContext(DataContext)

    let [logoCircleDash, setlogoCircleDash] = useState("0 2000")

    useEffect(() => {
        let i = 1138
        setInterval(() => {
            setlogoCircleDash(i + " 2000")

            // Если полоска дошла до конца, то обнуляем
            if (i === 1138) {
                i = 0
                return
            }

            i++
        }, 10);
    }, [])

    return (
        <>
            <article>
                <section className="home-header section-grey flex-col">
                    <nav className="flex-row">
                        <div className="home-header__logo-wrapper">
                            <img src={imgLogo} alt="logo" />
                        </div>
                        <ul className="flex-row">
                            <li>
                                <Link to={"#"}><button className="nav-button">Главная</button></Link>
                            </li>
                            <li>
                                <Link to={"#"}><button className="nav-button">О нас</button></Link>
                            </li>
                            <li>
                                <Link to={"#"}><button className="nav-button">Стоимость</button></Link>
                            </li>
                            <li>
                                <Link to={"#"}><button className="nav-button">Условия работы</button></Link>
                            </li>
                            <li>
                                <Link to={"#"}><button className="nav-button">Контакты</button></Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="home-header__title">
                        <h1>Создаем качественный продукт</h1>
                        <div className="home-header__title-sub flex-row">
                            <div className="home-header__title-arrow"></div>
                            <h1>для вашего <span className="h1">бизнеса</span></h1>
                        </div>
                    </div>

                    <div className="home-header__sub-title-wrapper flex-row">
                        <div className="home-header__sub-title flex-col">
                            <h2><span className="h2">В нашей комаде</span> дизайнеры, разработчики</h2>
                            <h2><span className="h2">и</span> продукты</h2>
                        </div>
                    </div>
                    
                    <div className="home-header__contacts flex-row">
                        <Link to={"#"}><button id="home-header__contacts-button">Контакты</button></Link>
                        <Link to={"#"} id="home-header__contacts-about-us">Подробнее о нас</Link>
                    </div>
                </section>

                <section className="home-brief">
                    <div className="home-brief__wrapper">
                        <svg>
                            <circle cx="305" cy="305" r="305"></circle>
                            <circle cx="305" cy="305" r="305" strokeDasharray={logoCircleDash}></circle>
                            <circle cx="305" cy="305" r="305"></circle>
                        </svg>

                        <img src={imgLogoSI} alt="logo" />

                        <div className="home-breif__stage flex-row">
                            <div className="home-breif__stage-circle"></div>
                            <h4>Знакомство с Вами</h4>
                        </div>
                        <div className="home-breif__stage flex-row">
                            <div className="home-breif__stage-circle"></div>
                            <h4>Бриф</h4>
                        </div>
                        <div className="home-breif__stage flex-row">
                            <div className="home-breif__stage-circle"></div>
                            <h4>Основная работа на проектом</h4>
                        </div>
                        <div className="home-breif__stage flex-row">
                            <div className="home-breif__stage-circle"></div>
                            <h4>Сдача проекта и заверешение работы.</h4>
                        </div>
                    </div>
                    
                </section>

                <section className="home-info section-grey">
                    <h2><span className="h2">Чем мы можем быть полезны Вашему</span> бизнесу<span className="h2">?</span></h2>
                    <h2><span className="h2">Мы</span> любим <span className="h2">и</span> умеем <span className="h2">делать разное, но чаще всего</span></h2>
                    <h2>клиентам <span className="h2">подходит вот это:</span></h2>

                    <div className="home-info__wrapper flex-row">
                        <div className="home-info__container">
                            <h4>CRM</h4>
                            <small>Аналитика и отчетность</small>
                            <small>Автоматизация бизнес-процессов</small>
                            <small>Интеграция с внешними системами</small>
                            <small>Управление клиентской базой данных</small>
                        </div>

                        <div className="home-info__container">
                            <h4>Сайт с нуля</h4>
                            <small>Адаптивность и мобильная совместимость</small>
                            <small>Оптимизация для поисковых систем</small>
                            <small>Интуитивно понятный интерфейс</small>
                            <small>Безопасность и защита данных</small>
                        </div>

                        <div className="home-info__container">
                            <h4>Создание MVP</h4>
                            <small>Привлекательность для инвесторов</small>
                            <small>Быстрое время выхода на рынок</small>
                            <small>Экономия времени и ресурсов</small>
                            <small>Обратная связь пользователей</small>
                        </div>
                    </div>
                </section>

                <section className="home-projects">
                    <h2>Опубликованные <span className="h2">проекты</span></h2>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col" width="198px">Год</th>
                                <th scope="col" width="402px">Клиент</th>
                                <th scope="col" width="540px">Что делали</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">2023</th>
                                <td>
                                    <p style={{fontWeight: "500"}}>Product Star</p>
                                    <p style={{color: "var(--text-gray)"}}>(Онлайн школа)</p>
                                </td>
                                <td>
                                    <p>Разработали лендинг для маштабной всеросийской конференции Product Camp.</p>
                                    <p>Собрали более 1000+заявок на участие.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2023</th>
                                <td>
                                    <p style={{fontWeight: "500"}}>Пункт Б</p>
                                    <p style={{color: "var(--text-gray)"}}>(Онлайн школа)</p>
                                </td>
                                <td>
                                    <p>Провели анализ рынка и конкурентов. </p>
                                    <p>Разработали внутреннюю онлайн-платформу с 0.</p>
                                    <p>Автоматизировали ручную работу специалистов.</p>
                                    <p>Сократили время работы менеджера с часа до 5 минут.</p>
                                    <p>Более 200+ довольных пользователей.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2023</th>
                                <td>
                                    <p style={{fontWeight: "500"}}>Hub Lab</p>
                                    <p style={{color: "var(--text-gray)"}}>(HR TEH продукт)</p>
                                </td>
                                <td>
                                    <p>Разработка MVP продукта для теста гипотезы.</p>
                                    <p>Провели качесвенные и количесвенные интервью.</p>
                                    <p>Построили карту пути пользователя и выявили болевые точки.</p>
                                    <p>Сформировали продуктовую стратегию платформы.</p>
                                    <p>Рассчитали unit экономику.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2023</th>
                                <td>
                                    <p style={{fontWeight: "500", position: "relative"}} id="home-projects__container-nda-icon">НДА</p>
                                    <p style={{color: "var(--text-gray)"}}>(Сервис для сбора</p>
                                    <p style={{color: "var(--text-gray)"}}>и анализа целевой</p>
                                    <p style={{color: "var(--text-gray)"}}>аудитории в Телеграм.)</p>
                                </td>
                                <td>
                                    <p>Разработали дизайн платформы.</p>
                                    <p>Автоматизировали сбор данных ЦА.</p>
                                    <p>Более 1000 активных пользователей платформы.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2024</th>
                                <td>
                                    <p style={{fontWeight: "500"}}>Loft</p>
                                    <p style={{color: "var(--text-gray)"}}>(Cтудия</p>
                                    <p style={{color: "var(--text-gray)"}}>промышленного дизайна)</p>
                                </td>
                                <td>
                                    <p>Провели редизайн официальный сайт компании.</p>
                                    <p>Спроектировали каталог товаров.</p>
                                    <p>Настроили SEO оптимизацию </p>
                                    <p>Сформировали  brand book</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="home-services">
                    <h2>Услуги</h2>

                    <table>
                        <tbody>
                            <tr>
                                <th scope="row" width="307px">Веб-дизайн</th>
                                <td>Мы делаем дизайн как одностраничных лендингов, так и сложных информационных порталов. Всегда ориентируемся на на задачу, объем и формат контента, подбирая инструменты и решения под масштаб проекта. Знаем, как создавать и оформлять сайты со сложной архитектурой. Основная часть нашего портфолио – работа с большими медиа, музеями и парками.</td>
                            </tr>
                            <tr>
                                <th scope="row">Дизайн мобильных приложений </th>
                                <td>Мы делаем дизайн как одностраничных лендингов, так и сложных информационных порталов. Всегда ориентируемся на на задачу, объем и формат контента, подбирая инструменты и решения под масштаб проекта. Знаем, как создавать и оформлять сайты со сложной архитектурой. Основная часть нашего портфолио – работа с большими медиа, музеями и парками.</td>
                            </tr>
                            <tr>
                                <th scope="row">Дизайн системы</th>
                                <td>Мы делаем дизайн как одностраничных лендингов, так и сложных информационных порталов. Всегда ориентируемся на на задачу, объем и формат контента, подбирая инструменты и решения под масштаб проекта. Знаем, как создавать и оформлять сайты со сложной архитектурой. Основная часть нашего портфолио – работа с большими медиа, музеями и парками.</td>
                            </tr>
                            <tr>
                                <th scope="row">Разработка</th>
                                <td>Мы делаем дизайн как одностраничных лендингов, так и сложных информационных порталов. Всегда ориентируемся на на задачу, объем и формат контента, подбирая инструменты и решения под масштаб проекта. Знаем, как создавать и оформлять сайты со сложной архитектурой. Основная часть нашего портфолио – работа с большими медиа, музеями и парками.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <footer className="home-footer">
                    <div className="home-footer__wrapper flex-row">
                        <div className="home-footer__links flex-col">
                            <h1>startit@mail.com</h1>
                            <ul className="home-footer__links flex-row">
                                <li>
                                    <Link to={"#"}><button><img src={imgTelegram} alt="telegram" /></button></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><button><img src={imgWhatsapp} alt="whatsapp" /></button></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><button><img src={imgBehance} alt="behance" /></button></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="home-footer__brief-wrapper flex-row">
                            <Link to={"#"}>Заполнить бриф</Link>
                        </div>
                    </div>
                </footer>
            </article>
        </>
    )
}
