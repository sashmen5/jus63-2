import React from "react"
import { Link } from "gatsby"
import "./header.css"


const navigation = [
	{
		text: "О нас",
		url: "/",
	},
	{
		text: "Услуги",
		url: "/",
	},
	{
		text: "Клиенты",
		url: "/",
	},
	{
		text: "Для юридических лиц",
		url: "/",
		children: [
			{ text: "Представительство в арбитражном суде", url: "/predstavitelstvo" },
			{ text: "Налоговые споры", url: "/nalog-sporu" },
			{ text: "Оспаривание кадастровой стоимости", url: "/spor-kadastr" },
		],
	},
	{
		text: "Для физических лиц",
		url: "/",
		children: [
			{ text: "Страховые споры", url: "/starhovue-sporu" },
			{ text: "Защита прав потребителей", url: "/zashiita-potrebitelya" },
			{ text: "Взыскание задолженности", url: "/dolgi" },
			{ text: "Экспертиза", url: "/ekspertiza" },
			{ text: "Банкротство физических лиц", url: "/bankrotstvo" },
			{ text: "Жилье, земля, недвижимость, приватизация", url: "/nedvigemost" },
			{ text: "Семейные споры", url: "/sporu" },
		],
	},

]

const Header = ({ siteTitle }) => {

	const renderNavItem = (item, index) => {
		const { text, url, children } = item
		return (
			<li key={index} className="header-li">
				<Link className="header-li-a" to={url}>{text}</Link>
				{
					children && (
						<div className="dropdown">
							{
								children.map((child, item) => (
											<Link className="dropdown-item-link" to={child.url}>
												<div className="dropdown-item">{child.text}</div>
											</Link>
									),
								)
							}
						</div>
					)
				}
			</li>
		)
	}

	return (
		<header className="header">
			<div className="width header-container">
				<Link className="header-link" to="/">Some header text</Link>
				<nav>
					<ul className="header-ul">
						{navigation.map((item, index) => renderNavItem(item, index))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
