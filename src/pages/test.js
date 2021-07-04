import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { 
  img_display,
} from '../components/layout.module.css'

const NewPage = () => {
  return (
    <Layout pageTitle="Comments">
      <p>Hi Lilian😀 Hope you are fine!</p>
      <p>Hi Vedant, yes I'm great thank you! 😁</p>
      <StaticImage className={img_display}
        alt="Smiley face image"
        src="../images/smiley.png"
      />
    </Layout>
  )
}

export default NewPage
