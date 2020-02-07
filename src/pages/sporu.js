import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { semejnueSporu } from "../contants"

const Sporu = () => (
	<Layout>
		<SEO title="Семейные споры"/>
		<PageLayout page={semejnueSporu}/>
	</Layout>
)

export default Sporu;

