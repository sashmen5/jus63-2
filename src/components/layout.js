import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import "./layout.css"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title}/>
			<main>{children}</main>
			<Footer/>
		</>
	)
}

export default Layout
