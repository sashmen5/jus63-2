import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { zashitaPravPotrebitelej } from "../contants"

const ZashitePortrebitelya = () => (
	<Layout>
		<SEO title="Защита прав потребителей"/>
		<PageLayout page={zashitaPravPotrebitelej}/>
	</Layout>
)

export default ZashitePortrebitelya

