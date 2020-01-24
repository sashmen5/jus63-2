import ekspertizaImg from './images/ekspertiza.jpg'
import predstavitelstvoArbitrazhImg from './images/predstavitelstvoArbitrazh.jpg'
import nalogovueSporiImg from './images/nalogovueSpori.jpeg'
import osporivanieKadastrovojSistemuImg from './images/osporivanieKadastrovojSistemu.jpg'
import strahSporiImg from './images/strahSpori.jpg'
import zashitaPravPotrebitelejImg from './images/zashitaPravPotrebitelej.jpg'
import vzuskanieZadoljenostiImg from './images/vzuskanieZadoljenosti.jpg'
import julZemlyaNedvigaImg from './images/julZemlyaNedviga.jpg'
import semejnueSporiuImg from './images/semejnueSporiu.jpg'
import bankrotstvoFizLicImg from './images/bankrotstvoFizLic.jpg'

export const predstavitelstvoArbitrazh = {
	img: predstavitelstvoArbitrazhImg,
	title: "Представительство в арбитражном суде",
	paragraphs: [
		{
			text: "В арбитражном суде рассматривают иски, связанные с деятельностью в сфере предпринимательства.",
		},
		{
			text: "Истцом могут быть юридические лица, являющиеся предпринимателями, предприятиями, организациями.",
		},
		{
			text: "Также разрешение экономических споров может проходить с участием субъектов РФ, государственных органов.",
		},
		{
			text: "У физического лица право обратиться в арбитражный суд возникает в следующих случаях:",
			list: {
				type: "unorder",
				items: [
					"участие гражданина в ООО;",
					"банкротство;",
					"если предпринимательская деятельность ведется частным предпринимателем, однако он не зарегистрирован в качестве юридического лица в реестре юридических лиц.",
				],
			},
		},
		{
			text: "К компетенции арбитражных судов относится:",
			list: {
				type: "unorder",
				items: [
					"рассмотрение споров по заключению и исполнению договоров;",
					"корпоративные споры;",
					"споры, связанные с регистрацией юридических лиц;",
					"по защите деловой репутации.",
				],
			},
		},
	],
}

export const nalogovueSpori = {
	img: nalogovueSporiImg,
	title: "Налоговые споры",
	paragraphs: [
		{
			text: "Каждый желает платить меньше налогов, приходит время, когда необходимо оптимизировать налогооблагаемую базу. В современной деловой практике большую часть споров с официальными органами составляют налоговые споры, связанные с попыткой налоговых органов доказать, что налогоплательщики (организации, предприниматели) не обоснованно занижают суммы налогов к уплате.",
		},
		{
			text: "Попытки налогоплательщиков отстоять свою позицию по наличию всех необходимых и правильно оформленных документов, согласно требованиям законодательства, довольно часто не приводят к успеху.",
		},

		{
			text: "Мы предлагаем для наших заказчиков услуги по решению налоговых споров:",
			list: {
				type: "unorder",
				items: [
					"анализ документов;",
					"снижение штрафных санкций по налогам;",
					"защита в случае неуплаты налогов;",
					"возврат излишне уплаченных налогов.",
				],
			},
		},
		{
			text: "Разрешая налоговые вопросы, мы проводим полный анализ документов по спорному делу, выбирают правовую позицию и грамотно оценивают перспективу и возможные варианты выхода из создавшейся ситуации.  Своевременное обращение в нашу компанию увеличивает Ваши шансы на положительный исход дела и значительно снижает затраты.  Цены на наши услуги зависят от сложности дела.",
		},
	],
}

export const osporivanieKadastrovojSistemu = {
	img: osporivanieKadastrovojSistemuImg,
	title: "Оспаривание кадастровой стоимости",
	paragraphs: [
		{
			text: "Кадастровая стоимость регулируется и определяется уполномоченными государственными органами. Зачастую кадастровая стоимость бывает завышена так как налог на имущество рассчитывается именно из кадастровой стоимости.",
		},
		{
			text: "Налог на имущество налагается на такие субъекты как:",
			list: {
				type: "order",
				items: [
					"Кварира, частный дом",
					"Гараж",
					"Объекты строительства",
					"Различные помещения",
				],
			},
		},

		{
			text: "Налогоплательщик имеет возможность снизить кадастровую стоимость, но потребуется помощь юриста.",
		},
		{
			text: "Этапы оспаривания кадастровой стоимости:",
			list: {
				type: "order",
				items: [
					"Эксперты исследуют рыночную цену объектов или объекта оспаривания;",
					"Отчет исследования изучают оценщики и юрист;",
					"Уже в суде или же в комиссии Росреестра идет процесс по защите прав клиента насчет кадастрового вопрос;",
					"После успешного дела местные органы управления информируются о снижении кадастровой стоимости.",
				],
			},
		},
	],
}

export const strahSpori = {
	img: strahSporiImg,
	title: "Страховые споры",
	paragraphs: [
		{
			text: "В нынешней экономической ситуации в стране на страховом рынке существуют серьезные проблемы. Изменения на себе почувствовали все, особенно автолюбители. Стоимость страховых услуг увеличивается, а качество их падает. Отсюда – неудобства во взаимоотношениях со страховыми компаниями.",
		},
		{
			text: "​Мы предлагаем полный спектр услуг, которые помогут решить проблемы со страховой компанией. Также мы разработали две специальные программы защиты автолюбителей в сложных дорожных ситуациях. Они связаны с оспариванием вины в ДТП, спорами о причиненном ущербе, вызванного плохим качеством дорожным покрытие.",
		},
		{
			text: "​Мы предоставляем услуги по следующим направлениям:",
		},
		{
			text: "Суды по ОСАГО, КАСКО:",
			list: {
				type: "unorder",
				items: [
					"Помощь в получении страховой выплаты;",
					"Взыскание утраты товарной стоимости;",
					"Бесплатный предварительный пересчет выплат по ОСАГО;",
					"Взыскание (обжалование) по отказам в выплате страхового возмещения;",
					"Взыскание неустойки за несвоевременную выплату или задержки в проведении ремонта.",
				],
			},
		},
		{
			text: "​Споры по качеству ремонта по ОСАГО:",
			list: {
				type: "unorder",
				items: [
					"Экспертиза некачественного ремонта;",
					"Взыскание со страховых компаний денежных средств, за некачественный ремонт;",
					"Взыскание неустойки за затягивание сроков ремонта;",
					"Получение со страховой компании направления в запрашиваемый сервис.",
				],
			},
		},
		{
			text: "Споры по вине в ДТП:",
			list: {
				type: "unorder",
				items: [
					"Помощь в правильном оформлении документов при ДТП;",
					"Представление интересов в административной практике;",
					"Обжалование вынесенных решений (постановлений, определений);",
					"Суды по установлению вины в ДТП.",
				],
			},
		},
		{
			text: "​Споры с дорожниками:",
			list: {
				type: "unorder",
				items: [
					"Срочная консультация при происшествии (наезд на яму, люк, препятствие);",
					"Претензионный порядок;",
					"Оценка ущерба;",
					"Представительство в суде.",
				],
			},
		},
	],
}

export const zashitaPravPotrebitelej = {
	img: zashitaPravPotrebitelejImg,
	title: "Защита прав потребителей",
	paragraphs: [
		{
			text: "В настоящее время, граждане практически каждый день сталкиваемся с покупкой товаров, получением каких-либо услуг, выполнением работ. И к сожалению, все чаще наши права потребителей нарушаются недобросовестными исполнителями, продавцами, изготовителями, поставщиками. Особенно наиболее часто мы сталкиваемся с нарушением прав потребителей недобросовестными Управляющими компании сфере ЖКХ, недобросовестными страховыми компаниями, которые умышленно занижают суммы по выплатам за причиненный автомобилю или другому имуществе ущерб и т.д. Восстановление справедливости при защите прав потребителей — это не только возврат товара недобросовестному продавцу и денег обманутому покупателю, это еще и значительное возмещение морального вреда за нарушение закона, взыскание неустойки и штрафа в пользу потребителя. У нас наработана хорошая практика по делам о защите прав потребителей, и мы знаем, как помочь потребителю восстановить нарушенные права.",
		},
		{
			text: "Наша работа заключается в следующем:",
			list: {
				type: "unorder",
				items: [
					"Юридическая консультация;",
					"Анализ и правовое заключение по вашему делу;",
					"Подготовка досудебной претензии в защиту прав потребителей;",
					"Подготовка и подача искового заявления в суд по делу о защите прав потребителей;",
					"Представление интересов в судебном процессе;",
					"Получение исполнительного листа на взыскание денежных средств;",
					"Предъявление исполнительного листа в банк либо судебным приставам на исполнение.",
				],
			},
		},
	],
}

export const vzuskanieZadoljenosti = {
	img: vzuskanieZadoljenostiImg,
	title: "Взыскание задолженности",
	paragraphs: [
		{
			text: "С проблемой возвращения долга сталкиваются все: от частных лиц до крупных компаний и банков. Самые частые судебные споры касаются именно этого вопроса, когда должник не реагирует на ваши звонки, не хочет обговаривать возможные варианты постепенной выплаты долга и пропускает платежи один за другим, судебное взыскание — самый действенный вариант.",
		},
		{
			text: "Взыскание долгов по распискам:",
			list: {
				type: "unorder",
				items: [
					"Правовой анализ документов",
					"Урегулирование претензий",
					"Взыскание через суд",
				],
			},
		},
		{
			text: "Неисполнение должником любого вида договорных обязательств:",
			list: {
				type: "unorder",
				items: [
					"Суды по неисполнению договорных обязательств",
					"Правовое сопровождение договоров купли-продажи, аренды, подряда, перевозки, ренты, возмездного оказания услуг, дарения, мены и тд.",
					"Взыскание убытков, неустойки и пеней с нарушителей договоров",
				],
			},
		},
		{
			text: "​Эффективная работа с приставами:",
			list: {
				type: "unorder",
				items: [
					"Поиск и наложение ареста на имущество должников",
					"Правовой прессинг действий пристава",
					"Обжалование действий или бездействий приставов",
				],
			},
		},
	],
}

export const ekspertiza = {
	title: "Экспертиза",
	img: ekspertizaImg,
	paragraphs: [
		{
			text: "В любом деле, которое касается возмещения ущерба, распределения наследства и других, где нужно установить сумму выплат, необходима независимая экспертиза. Чтобы ваши права соблюдались, и Вы получили полную выплату, мы проводим экспертизу по следующим направлениям:",
		},
		{
			text: "Наша работа заключается в следующем:",
			list: {
				type: "unorder",
				items: [
					"Автоэкспертиза",
					"Оценка ущерба",
					"Оценка при вступлении в наследство",
					"Расчёт утраты товарной стоимости",
					"Подготовка отчетов для оспаривания кадастровой стоимости",
				],
			},
		},
	],
}

export const bankrotstvoFizLic = {
	img: bankrotstvoFizLicImg,
	title: "Банкротство физических лиц",
	paragraphs: [
		{
			text: "Относительно недавно банкротство стало прерогативой не только юридических, но и физических лиц. Теперь каждый гражданин может решить свои финансовые проблемы, разобраться с долгами. ",
		},
		{
			text: "Суть процедуры состоит в том, что арбитражный суд признает определенного гражданина неплатежеспособным. То есть тем, кто не может исполнить свои финансовые обязательства перед кредиторами.",
		},
		{
			text: "Учитывайте, что суд будет выносить на рассмотрение только те дела о банкротстве физических лиц, сумма долга в которых превысила отметку в 500 тысяч рублей. При этом важно, чтобы просрочка достигла трех месяцев.",
		},
		{
			text: "Процедура банкротства физического лица также может инициироваться в том случае, когда у гражданина задолженность перед несколькими финансовыми организациями и даже после выплаты какой-то части он не сможет погасить долг полностью. В этом случае он должен обратиться в суд не позже, чем через месяц после наступления удовлетворяющей условия банкротства ситуации.",
		},
	],
}

export const julZemlyaNedviga = {
	img: julZemlyaNedvigaImg,
	title: "Жилье, земля, недвижимость, приватизация",
	paragraphs: [
		{
			text: "Недвижимость – надежный способ вложения средств. Именно поэтому решение всех юридических вопросов, связанных с земельными участками, получением наследства и правильным оформлением документов на собственность нужно решать своевременно.",
		},
		{
			text: "Чтобы вы могли спокойно строить дом для семьи или развивать бизнес на земле, которая в собственности, мы готовы быстро и эффективно отработать все нюансы по оформлению недвижимости по этим направлениям:",
		},
		{
			text: "Земельные споры:",
			list: {
				type: "unorder",
				items: [
					"Помощь в изменении назначения земли;",
					"Помощь в получении земли в собственность;",
					"Межевание участка;",
					"Постановка на кадастровый учет;",
					"Изменение зоны разрешенного использования земель;",
					"Перевод помещение из жилого фонда в нежилой, и наоборот.",
				],
			},
		},
		{
			text: "Признание права собственности:",
			list: {
				type: "unorder",
				items: [
					"Правовой анализ документов;",
					"Признание права собственности через суд;",
					"Признание сделки (договора) недействительной и возврат имущества из чужого незаконного владения;",
					"Помощь в оформлении документов для приватизации.",
				],
			},
		},
		{
			text: "Споры с государственными органами:",
			list: {
				type: "unorder",
				items: [
					"Оспаривание действий/бездействий государственных органов;",
					"Признание решений государственных органов незаконными через суд.",
				],
			},
		},
	],
}

export const semejnueSporu = {
	title: "Семейные споры",
	img: semejnueSporiuImg,
	paragraphs: [
		{
			text: "Проблемы в семейной жизни, раздел имущества и бракоразводные процессы часто заканчиваются громкими спорами, негативными эмоциями от которых страдают как супруги, так и дети.",
		},
		{
			text: "Помощь в оформлении брачного договора:",
			list: {
				type: "unorder",
				items: [
					"Правовой анализ документов;",
					"Определение совместно нажитого имуществ;",
					"Отстаивание интересов клиента при заключении брачного договора;",
					"Составление брачного договора.",
				],
			},
		},
		{
			text: "​Раздел имущества:",
			list: {
				type: "unorder",
				items: [
					"Консультация и правовой анализ документов;",
					"Оценка имущества;",
					"Помощь в обсуждении соглашения между супругами (бывшими);",
					"Представление в суде по разделу имущества.",
				],
			},
		},
		{
			text: "​Помощь при определении порядка общения с ребенком:",
			list: {
				type: "unorder",
				items: [
					"Правовая консультация;",
					"Досудебное урегулирование порядка общении;",
					"Представление в суде по определению порядка общения с ребенком.",
				],
			},
		},
		{
			text: "Наследство:",
			list: {
				type: "unorder",
				items: [
					"Юридическое сопровождение оформления наследства;",
					"Восстановление сроков на вступление в наследство;",
					"Признание юридического факта родственных отношений;",
					"Судебные споры с наследниками",
				],
			},
		},
	],
}
































