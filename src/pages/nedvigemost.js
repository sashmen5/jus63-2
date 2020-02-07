import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageLayout from "../components/pageLayout/pageLayout"
import { julZemlyaNedviga } from "../contants"


const Nedvigemost = () => (
	<Layout>
		<SEO title="Жилье, земля, недвижимость, приватизация"/>
		<PageLayout page={julZemlyaNedviga}/>
	</Layout>
)

export default Nedvigemost;

