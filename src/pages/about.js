// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Lilian, the proud creator of this site, which I built during week 1 of my internship with E Acad using Gatsby.</p>
      <StaticImage
        alt="Close up picture of Lily, the author of this webpage. She has long red/brown hair and is wearing glasses. "
        src="../images/lily.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage