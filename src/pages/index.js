import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import map from "../images/map.png"
import molotok from "../images/big-image.jpg"
import us from "../images/us.jpg"

const IndexPage = () => (
	<Layout>
		<SEO title="Имя конторы"/>
		<img className='wide-img'
				 src={molotok}
				 alt=""/>
		<div className="opacity-header">
			<div className="opacity-header-line-1 margin-bottom-15">Юридические услуги для всех лиц от</div>
			<div className="opacity-header-line-1">консультации до разрешения споров</div>
		</div>
		{/*<div className="cards">*/}
		{/*	<div className="card">*/}
		{/*		<div className="card-header">УСЛУГИ</div>*/}
		{/*		<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,*/}
		{/*			чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед*/}
		{/*			конкурентами.*/}
		{/*		</div>*/}
		{/*		<div className="card-link">Подробнее</div>*/}
		{/*	</div>*/}

		{/*	<div className="card">*/}
		{/*		<div className="card-header">УСЛУГИ</div>*/}
		{/*		<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,*/}
		{/*			чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед*/}
		{/*			конкурентами.*/}
		{/*		</div>*/}
		{/*		<div className="card-link">Подробнее</div>*/}
		{/*	</div>*/}

		{/*	<div className="card">*/}
		{/*		<div className="card-header">УСЛУГИ</div>*/}
		{/*		<div className="card-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,*/}
		{/*			чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед*/}
		{/*			конкурентами.*/}
		{/*		</div>*/}
		{/*		<div className="card-link">Подробнее</div>*/}
		{/*	</div>*/}
		{/*</div>*/}

		<div className="about-us">
			<div className="width">
				<div className="about-us-header">О НАС</div>
				<div className="about-us-container">

					<div className="about-us-text">
						<div className="about-us-bold-name">Погосян Роман Артурович</div>
						<div className="about-us-bold">Юридический практический стаж более 10 лет</div>
						<div className="about-us-bold">Специализации:</div>
						<div className="about-us-spec">Налоговые споры, возмещение морального и материального ущерба, автоправо
							(ДТП, ГИБДД, ОСАГО, КАСКО), взыскание денежных средств со страховых компаний за некачественный ремонт,
							семейное право, раздел имущества, наследство.
						</div>

						<div className="about-us-bold-name">Плеханова Валерия Сергеевна</div>
						<div className="about-us-bold">Юридический практический стаж более 7 лет</div>
						<div className="about-us-bold">Специализации:</div>
						<div className="about-us-spec">Взыскание задолженности, операции с недвижимостью, банкротство, регистрация
							юридических лиц (ООО,ИП), досудебное урегулирование споров, представление интересов в суде, наследство.
						</div>

					</div>
					<div className="about-us-img">
						<img src={us} alt=""/>
					</div>
				</div>
				{/*<div className="about-us-text">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните*/}
				{/*	дважды, чтобы добавить свое содержание и настроить шрифт. Текстовый блок можно перетащить в любое место на*/}
				{/*	странице. Расскажите посетителям сайта о себе подробнее, например, как вам пришла в голову идея бизнеса.*/}
				{/*</div>*/}
				{/*<div className="about-us-text">Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность,*/}
				{/*	чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед*/}
				{/*	конкурентами. Приводите увлекательные факты, цифры и не забудьте про ключевые слова, по которым ваш сайт*/}
				{/*	найдут в поисковых системах.*/}
				{/*</div>*/}

				{/*<div className="about-us-link">Подробнее</div>*/}
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
					<div className="contact-form-address">г. Самара, ул. Стара-Загора, 27,</div>
					<div className="contact-form-address">офис 805</div>
					{/*<div className="contact-form-address">info@mysite.ru</div>*/}
					<div className="contact-form-address">Телефон: +7 927 900 0555</div>

					<form name="contact" netlify netlify-honeypot="bot-field" hidden>
						<input type="text" name="name" />
						<input type="email" name="email" />
						<textarea name="message"></textarea>
					</form>

					<form name="contact" method="post">
						<input type="hidden" name="form-name" value="contact" />
						<p>
							<label>Your Name: <input type="text" name="name"/></label>
						</p>
						<p>
							<label>Your Email: <input type="email" name="email"/></label>
						</p>
						<p>
							<label>Message: <textarea name="message"></textarea></label>
						</p>
						<p>
							<button type="submit">Send</button>
						</p>
					</form>

					{/*<form name="contact" netlify netlify-honeypot="bot-field" hidden>*/}
					{/*	<input type="text" required placeholder="Имя"/>*/}
					{/*	<input type="text" required placeholder="Email"/>*/}
					{/*	<input type="text" required placeholder="Тема"/>*/}
					{/*	<textarea name="сообщение"></textarea>*/}
					{/*</form>*/}

					{/*<form name="order" data-netlify="true" className="contact-us-form">*/}
					{/*	<input type="text" required placeholder="Имя"/>*/}
					{/*	<input type="text" required placeholder="Email"/>*/}
					{/*	<input type="text" required placeholder="Тема"/>*/}
					{/*	<textarea type="text" name="сообщение" rows={5} placeholder="Сообщение"/>*/}
					{/*	<input type="submit" content="Отправить"/>*/}
					{/*</form>*/}

					{/*<form*/}
					{/*	name="contact"*/}
					{/*	method="POST"*/}
					{/*	data-netlify="true"*/}
					{/*>*/}
					{/*	<p>*/}
					{/*		<label>Your Name: <input type="text" name="name"/></label>*/}
					{/*	</p>*/}
					{/*	<p>*/}
					{/*		<label>Your Email: <input type="email" name="email"/></label>*/}
					{/*	</p>*/}
					{/*	<p>*/}
					{/*		<label>Your Role: <select name="role[]" multiple>*/}
					{/*			<option value="leader">Leader</option>*/}
					{/*			<option value="follower">Follower</option>*/}
					{/*		</select></label>*/}
					{/*	</p>*/}
					{/*	<p>*/}
					{/*		<label>Message: <textarea name="message"></textarea></label>*/}
					{/*	</p>*/}
					{/*	<p>*/}
					{/*		<button type="submit">Send</button>*/}
					{/*	</p>*/}
					{/*</form>*/}
				</div>
			</div>

		</div>
	</Layout>
)

export default IndexPage
