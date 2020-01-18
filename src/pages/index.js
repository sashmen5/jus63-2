import React from "react";
import { Link } from "gatsby";
import "./index.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import map from "../images/map.png";

const IndexPage = () => (
	<Layout>
		<SEO title="Home"/>
		<img className='wide-img'
				 src="http://coolwallpaperz.info/user-content/uploads/wall/o/75/entertainment-wide-hq-misc-photography-644041.jpg"
				 alt=""/>
		<div className="opacity-header">
			<div className="opacity-header-line-1">РАЗРАБАТЫВАЕМ ИННОВАЦИОННЫЕ СТРАТЕГИИ,</div>
			<div className="opacity-header-line-2">ДОБИВАЕМСЯ РОСТА</div>
		</div>
		<div className="cards">
			<div className="card">
				<div className="card-header">УСЛУГИ</div>
				<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,
					чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед
					конкурентами.
				</div>
				<div className="card-link">Подробнее</div>
			</div>

			<div className="card">
				<div className="card-header">УСЛУГИ</div>
				<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,
					чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед
					конкурентами.
				</div>
				<div className="card-link">Подробнее</div>
			</div>

			<div className="card">
				<div className="card-header">УСЛУГИ</div>
				<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,
					чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед
					конкурентами.
				</div>
				<div className="card-link">Подробнее</div>
			</div>
			{/*<div className="card"></div>*/}
			{/*<div className="card"></div>*/}
		</div>

		<div className="about-us">
			<div className="width">
				<div className="about-us-header">О НАС</div>
				<div className="about-us-text">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните
					дважды, чтобы добавить свое содержание и настроить шрифт. Текстовый блок можно перетащить в любое место на
					странице. Расскажите посетителям сайта о себе подробнее, например, как вам пришла в голову идея бизнеса.
				</div>
				<div className="about-us-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,
					чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед
					конкурентами. Приводите увлекательные факты, цифры и не забудьте про ключевые слова, по которым ваш сайт
					найдут в поисковых системах.
				</div>

				<div className="about-us-link">Подробнее</div>
			</div>


		</div>

		<div className="contact-us">
			<div className="width">
				<div className="contact-us-header">СВЯЖИТЕСЬ С НАМИ</div>
			</div>
				<div className="contact-us-address-container">
					<div className="map">
						<img src={map}/>
					</div>
					<div className="contact-form">
						<div>ул. Арбат, 1а, Москва,</div>
						<div>119019, Россия</div>
						<div>info@mysite.ru</div>
						<div>Телефон: +7 (495) 000-00-00</div>

						<form className="contact-us-form">
							<input type="text" placeholder="Имя"/>
							<input type="text" placeholder="Email"/>
							<input type="text" placeholder="Тема"/>
							<textarea type="text" rows={5} placeholder="Сообщение"/>
							<input type="submit" content="Отправить"/>
						</form>
					</div>
				</div>

		</div>
	</Layout>
)

export default IndexPage
