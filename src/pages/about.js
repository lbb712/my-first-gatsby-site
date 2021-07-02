// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Lilian, the proud creator of this site, which I built during week 1 of my internship with E Acad using Gatsby.</p>
      <p>I have just finished my third year at University of Birmingham studing for my MSci in Computer Science. I am mostly interseted in machine learning, artificial intelligence and data analysis, but I am up for giving everything a go.</p>
      <p>Check out the Week 1 tab to see the technologies I have learnt this week that have aided the development of this site. I hope to continue to develop this site as I continue to learn about all these new technologies. For now, enjoy!</p>
      <StaticImage
        alt="Close up picture of Lily, the author of this webpage. She has long red/brown hair and is wearing glasses. "
        src="../images/lily.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage