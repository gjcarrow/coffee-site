import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection.js"
import Footer from "../components/globals/Footer.js"
import Info from "../components/Home/Info";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
      />
      {/* You can also put children here of the backgroundSection component if you need to.
          You would just need to be sure to change it from a self-closing tag and put your children in there.
       */}
      <Info />
      <Footer />
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
