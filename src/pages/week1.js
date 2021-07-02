import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Week 1 at E Acad">
      <p>Welcome to the week 1 section of my site. Below is a list of the technologies I have learnt during the course of this week. As I continue to learn how to add content to the blog posts using MDX, I will evolve this list with a description of what each of these technologies does and how each of them have individually led to the creation of this site.</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      <StaticImage
      alt="Image of two cartoon construction workers wearing hard-hats. One is holding a sign saying coming soon. The other is sat between a traffic cone and a sign using a laptop. "
      src="../images/Under-Construction.jpg"
    />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage