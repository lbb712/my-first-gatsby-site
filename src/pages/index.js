// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
    <p>Hi everyone! Welcome to my first gatsby site. I'm making this by following the Gatsby Tutorial. Check out the other pages for more information.</p>
    <StaticImage
      alt="Image of code on a computer screen"
      src="../images/Computer-Code.jpeg"
    />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage