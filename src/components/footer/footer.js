import React from "react";
import "./footer.css";
import { Link } from "gatsby"

const Footer = () => (
	<footer className="footer">
		<div className="width footer-container">
			<Link className="header-li-a" to='/'>Плеханова и &#9400;</Link>
			<nav>
				<ul className="footer-ul">
					{/*<li className="footer-li">VK</li>*/}
					{/*<li className="footer-li">FACEBOOK</li>*/}
					{/*<li className="footer-li">INST</li>*/}
				</ul>
			</nav>
		</div>
	</footer>
)

export default Footer
