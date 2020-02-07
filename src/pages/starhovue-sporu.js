import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { strahSpori } from "../contants"

const StrahSporu = () => (
	<Layout>
		<SEO title="Страховые споры"/>
		<PageLayout page={strahSpori}/>
	</Layout>
)

export default StrahSporu

