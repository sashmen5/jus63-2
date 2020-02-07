import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { ekspertiza } from "../contants"

const Ekspertiza = () => (
	<Layout>
		<SEO title="Экспертиза"/>
		<PageLayout page={ekspertiza}/>
	</Layout>
)

export default Ekspertiza

