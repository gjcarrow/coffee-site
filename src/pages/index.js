import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { FaMagic } from 'react-icons/fa'
import { FaRebel, FaBuysellads } from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="has-text-black-ter">Hi Wankers</h1>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <FaBuysellads />
    <FaRebel />
  </Layout>
)

export default IndexPage
