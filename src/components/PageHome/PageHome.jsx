import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import { DataContext } from "../Context"
import Navigation from "../Navigation/Navigation"
import imgLogoSI from "../../assets/logo/logo-home-445.svg"
import imgBehance from "../../assets/icons/behance-black.svg"
import imgTelegram from "../../assets/icons/telegram-black.svg"
import imgWhatsapp from "../../assets/icons/whatsapp-black.svg"

import "./PageHome-header.css"
import "./PageHome-header-phone.css"
import "./PageHome-brief.css"
import "./PageHome-brief-phone.css"
import "./PageHome-info.css"
import "./PageHome-info-phone.css"
import "./PageHome-projects.css"
import "./PageHome-projects-phone.css"
import "./PageHome-services.css"
import "./PageHome-services-phone.css"
import "./PageHome-footer.css"
import "./PageHome-footer-phone.css"

export default function PageHome() {
    // const Context = useContext(DataContext)

    useEffect(() => {
        document.title = "Start it"
    }, [])

    let [logoCircleDash, setLogoCircleDash] = useState("0 2000")

    function animateCircle() {
        let i = 0
        setLogoCircleDash("0 2000")
        setTimeout(() => {
            let intervalId = setInterval(() => {
                setLogoCircleDash(i + " 2000")
                i += 2
    
                // Если полоска дошла до конца, то обнуляем
                if (i >= 1140) {
                    i = 0
                    clearInterval(intervalId)
                    setTimeout(animateCircle, 500)
                }
            }, 10);
        }, 500)
    }

    useEffect(() => {
        animateCircle()
    }, [])

    return (
        <>
            <article>
                <section className="home-header">
                    <div className="home-header__content section-grey flex-col">
                        <Navigation />

                        {/* Пк заголовок */}
                        <div className="home-header__title">
                            <h1>Создаем качественный продукт</h1>
                            <div className="flex-row">
                                <div className="home-header__title-arrow"></div>
                                <h1>для вашего <span>бизнеса</span></h1>
                            </div>
                        </div>

                        {/* Мобильный заголовок */}
                        <div className="home-header__title home-header__title_phone">
                            <h1>Создаем качественный</h1>
                            <div className="flex-row">
                                <h1>продукт</h1>
                                <div className="home-header__title-arrow"></div>
                            </div>
                            <h1>для вашего <span>бизнеса</span></h1>
                        </div>

                        {/* Пк заголовок */}
                        <div className="home-header__sub-title-wrapper flex-row">
                            <div className="home-header__sub-title flex-col">
                                <h2><span>В нашей команде</span> дизайнеры, разработчики</h2>
                                <h2><span>и</span> продукты</h2>
                            </div>
                        </div>

                        {/* Мобильный под-заголовок */}
                        <div className="home-header__sub-title-wrapper home-header__sub-title-wrapper_phone flex-row">
                            <div className="home-header__sub-title flex-col">
                                <h2><span>В нашей команде</span> дизайнеры,</h2>
                                <h2>разработчики <span>и</span> продукты</h2>
                            </div>
                        </div>

                        <div className="home-header__contacts flex-row">
                            <Link to={"#"} id="home-header__contacts-link">Контакты</Link>
                            <Link to={"#"} id="home-header__contacts-about-us">Подробнее о нас</Link>
                        </div>
                    </div>
                </section>

                <section className="home-brief">
                    {/* Заголовок на телефоне */}
                    <h4 className="home-brief__title">Этапы работ</h4>
                    
                    <div className="home-brief__wrapper">
                        <svg>
                            <circle cx="305" cy="305" r="305"></circle>
                            <circle cx="305" cy="305" r="305" strokeDasharray={logoCircleDash}></circle>
                            <circle cx="305" cy="305" r="305"></circle>
                        </svg>

                        <img src={imgLogoSI} alt="logo" />

                        <div className="home-brief__stage flex-row">
                            <div className="home-brief__stage-circle" data-number="1"></div>
                            <h4>Знакомство с Вами</h4>
                        </div>
                        <div className="home-brief__stage flex-row">
                            <div className="home-brief__stage-circle" data-number="2"></div>
                            <h4>Бриф</h4>
                        </div>
                        <div className="home-brief__stage flex-row">
                            <div className="home-brief__stage-circle" data-number="3"></div>
                            <h4>Основная работа на проектом</h4>
                        </div>
                        <div className="home-brief__stage flex-row">
                            <div className="home-brief__stage-circle" data-number="4"></div>
                            <h4>Сдача проекта и завершение работы</h4>
                        </div>
                    </div>
                    
                </section>

                <section className="home-info">
                    <div className="home-info__content section-grey flex-col">
                        <div className="home-info__title">
                            <h2>Чем мы можем быть полезны Вашему <span className="blue-span">бизнесу</span>?</h2>
                            <h2>Мы <span>любим</span> и <span>умеем</span> делать разное,<br /> но чаще всего</h2>
                            <h2><span>клиентам</span> подходит вот это:</h2>
                        </div>

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
                    </div>
                </section>

                <section className="home-projects">
                    <h2>Опубликованные <span>проекты</span></h2>

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
                                    <p className="td-phone">2023</p>
                                </td>
                                <td>
                                    <p>Разработали лендинг для масштабной всероссийской конференции Product Camp.</p>
                                    <p>Собрали более 1000+заявок на участие.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2023</th>
                                <td>
                                    <p style={{fontWeight: "500"}}>Пункт Б</p>
                                    <p style={{color: "var(--text-gray)"}}>(Онлайн школа)</p>
                                    <p className="td-phone">2023</p>
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
                                    <p className="td-phone">2023</p>
                                </td>
                                <td>
                                    <p>Разработка MVP продукта для теста гипотезы.</p>
                                    <p>Провели качественные и количественные интервью.</p>
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
                                    <p className="td-phone">2023</p>
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
                                    <p style={{color: "var(--text-gray)"}}>(Студия</p>
                                    <p style={{color: "var(--text-gray)"}}>промышленного дизайна)</p>
                                    <p className="td-phone">2024</p>
                                </td>
                                <td>
                                    <p>Провели редизайн официальный сайт компании.</p>
                                    <p>Спроектировали каталог товаров.</p>
                                    <p>Настроили SEO оптимизацию.</p>
                                    <p>Сформировали  brand book.</p>
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
                                <td>
                                    <p>Уникальные дизайны, отражающие стиль и цели бизнеса.</p>
                                    <p>Легкий и интуитивно понятный пользовательский интерфейс.</p>
                                    <p>Адаптивность для устройств различных размеров.</p>
                                    <p>Оптимизация для максимальной конверсии и эффективности.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Дизайн мобильных приложений</th>
                                <td>
                                    <p>Стильные и удобные интерфейсы для мобильных устройств.</p>
                                    <p>Уникальные дизайны, соответствующие вашей брендовой идентичности.</p>
                                    <p>Инновационные функции и возможности для удовлетворения потребностей пользователей.</p>
                                    <p>Адаптивность для различных платформ и устройств.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Дизайн системы</th>
                                <td>
                                    <p>Согласованные дизайн-системы для поддержки брендинга и консистентности.</p>
                                    <p>Простота масштабирования и управления ресурсами.</p>
                                    <p>Ускорение процесса разработки и повышение производительности.</p>
                                    <p>Поддержка вашей брендовой идентичности и стандартов.</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Разработка</th>
                                <td>
                                    <p>Пользовательские решения, соответствующие вашим потребностям.</p>
                                    <p>Технологическая экспертиза и использование современных инструментов.</p>
                                    <p>Полный цикл разработки - от консультации до поддержки.</p>
                                    <p>Качество, надежность и удовлетворение потребностей пользователей.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <footer className="home-footer">
                    <div className="home-footer__content flex-row">
                        <div className="home-footer__links flex-col">
                            <h1>startit@mail.com</h1>
                            <ul className="flex-row">
                                <li>
                                    <Link to={"#"}><img src={imgTelegram} alt="telegram" /></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><img src={imgWhatsapp} alt="whatsapp" /></Link>
                                </li>
                                <li>
                                    <Link to={"#"}><img src={imgBehance} alt="behance" /></Link>
                                </li>
                            </ul>
                        </div>

                        <Link to={"/brief"} className="home-footer__brief flex-row">Заполнить бриф</Link>
                    </div>
                </footer>
            </article>
        </>
    )
}
