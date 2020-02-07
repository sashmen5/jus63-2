import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { nalogovueSpori } from "../contants"

const NalogSporu = () => (
	<Layout>
		<SEO title="Налоговые споры"/>
		<PageLayout page={nalogovueSpori}/>
	</Layout>
)

export default NalogSporu

