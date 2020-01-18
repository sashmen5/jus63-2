import React from "react"
import "./pageLayout.css"

const PageLayout = ({ page }) => {

	const { title, img, paragraphs } = page

	const renderList = (list) => {
		const { items } = list;

		return (
			<>
				{
					items.map((item, index) => <li className="page-li" key={index}>{item}</li>)
				}
			</>
		)
	}

	const renderParagraph = (paragpraph, index) => {
		const { text, list } = paragpraph

		const className = list ? "list-header" : '';

		return (
			<div className="paragraph" key={index}>
				<div className={className}>{text}</div>
				{
					list && (list.type === "unorder" ? <ul className="page-ul">{renderList(list)}</ul> : <ol>{renderList(list)}</ol>)
				}
			</div>
		)
	}

	const renderParagraphs = () => {

		return (
			<div className="paragraphs">
				{
					paragraphs.map((item, index) => renderParagraph(item, index))
				}
			</div>
		)
	}
	return (
		<div className="width page">
			<h1>{title}</h1>
			<img src={img} alt=""/>

			{renderParagraphs()}

		</div>
	)
}

export default PageLayout
