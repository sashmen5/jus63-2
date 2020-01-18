import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { osporivanieKadastrovojSistemu } from "../contants"

const SporKadastr = () => (
	<Layout>
		<SEO title="Home"/>
		<PageLayout page={osporivanieKadastrovojSistemu}/>
	</Layout>
)

export default SporKadastr

