import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the retarded seconds page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the where you came from</Link>
  </Layout>
)

export default SecondPage