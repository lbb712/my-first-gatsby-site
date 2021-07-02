import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const NewPage = () => {
  return (
    <Layout pageTitle="New Page">
      <p>Hi Lilian😀 Hope you are fine!</p>
      <StaticImage
        alt="Smiley face image"
        src="../images/smiley.jpg"
      />
    </Layout>
  )
}

export default NewPage
