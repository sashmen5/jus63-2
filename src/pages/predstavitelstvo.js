import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { predstavitelstvoArbitrazh } from "../contants"

const Predstavitelstvo = () => (
	<Layout>
		<SEO title="Home"/>
		<PageLayout page={predstavitelstvoArbitrazh}/>
	</Layout>
)

export default Predstavitelstvo

