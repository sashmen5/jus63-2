import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { bankrotstvoFizLic } from "../contants"


const Bankrotstvo = () => (
	<Layout>
		<SEO title="Банкротство физических лиц"/>
		<PageLayout page={bankrotstvoFizLic}/>
	</Layout>
)

export default Bankrotstvo;

