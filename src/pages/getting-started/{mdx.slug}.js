import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentDetail from '../../components/ContentDetail';

const ContentPage = ({ data }) => {
  console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <ContentDetail data={data} />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(
      id: {eq: $id}
      frontmatter: {category: {eq: "getting-started"}}
      ) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        category
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
      body
    }
  }
`

export default ContentPage;