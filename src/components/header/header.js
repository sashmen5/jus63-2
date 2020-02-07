import React, { useState } from "react"
import { Link } from "gatsby"
import "./header.css"


const navigation = [
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
	const [isMenuOpened, setIsOpened] = useState(false)

	const toggleMenu = () => setIsOpened(state => !state)

	const renderNavItem = (item, index) => {
		const { text, url, children } = item
		return (
			<li key={index} className="header-li">
				<Link className="header-li-a" to={url}>{text}</Link>
				{
					children && (
						<div className="dropdown">
							{
								children.map(child => (
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

	const renderMobileNavItem = (item, index) => {
		const { text, url, children } = item
		return (
			<>
				<li key={index}>
					<div className="header-li-mobile-group">{text}</div>
				</li>
				{
					children.map(child => (
						<li key={child.text}>
							<Link className="header-li-mobile" to={child.url}>{child.text}</Link>
						</li>
					))
				}
			</>

		)
	}

	return (
		<header className="header">
			<div className="width header-container">
				<div className="desktop">
					<Link className="header-link" to='/'>Право.com</Link>

					<nav>
						<ul className="header-ul">
							{navigation.map((item, index) => renderNavItem(item, index))}
						</ul>
						<a href="javascript:void(0)" className="icon" onClick={toggleMenu}>
							<i className="fa fa-bars"></i>
						</a>
					</nav>
				</div>
				{
					isMenuOpened && <ul className="header-ul-mobile">
						{navigation.map((item, index) => renderMobileNavItem(item, index))}
					</ul>
				}
			</div>
		</header>
	)
}

export default Header
