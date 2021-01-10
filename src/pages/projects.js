import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section>
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
