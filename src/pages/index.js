import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection.js"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
      >
        <h2 className="has-text-black is-capitalized has-text-centered">
          This is the subheading should be children
        </h2>
      </BackgroundSection>
  </Layout>
)

/* src */


export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
