import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { zashitaPravPotrebitelej } from "./contants"

const ZashitePortrebitelya = () => (
	<Layout>
		<SEO title="ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ"/>
		<PageLayout page={zashitaPravPotrebitelej}/>
	</Layout>
)

export default ZashitePortrebitelya

