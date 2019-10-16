import React from "react"
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection.js"
import Footer from "../components/globals/Footer.js"
import Info from "../components/Home/Info";


const AboutPage = ({data}) => (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="about joe's"
        styleClass="about-background"
      />
      <Info />
      <Footer />
    </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`


export default AboutPage