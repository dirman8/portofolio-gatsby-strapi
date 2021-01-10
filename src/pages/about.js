import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, stack, image, info } = nodes[0]
  return (
    <Layout>
      <section className="about-sec">
        <article className="about-sec-div">
          <Image fluid={image.childImageSharp.fluid} className="about-image" />
          <div className="about-content">
            <Title title="about me">{title}</Title>
            <p>{info}</p>
            <div className="about-stack-div">
              {stack.map(item => {
                return <span>{item.title}</span>
              })}
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default About
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
