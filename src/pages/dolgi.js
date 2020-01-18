import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { vzuskanieZadoljenosti } from "./contants"


const Dolgi = () => (
	<Layout>
		<SEO title="ВЗЫСКАНИЕ ЗАДОЛЖЕННОСТИ"/>
		<PageLayout page={vzuskanieZadoljenosti}/>
	</Layout>
)

export default Dolgi;

