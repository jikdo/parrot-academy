import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentList from '../../components/ContentList';
import { textGrey, textCenter } from '../../styles/base.module.css';

const HowToPage = ({ data }) => {

  return (

    <Layout pageTitle="How To">
      <div className={textCenter}>
        <h1>How to use Parrot Protocol</h1>
        <p className={textGrey}> Concise tutorials for users </p>
      </div>

      <ContentList contents={data.allMdx.nodes} />

    </Layout>

  )


}

export const query = graphql`
query {
  allMdx(filter: {frontmatter: {category: {eq: "how-to"}}}) {
    nodes {
      id
      slug
      frontmatter {
        category
        date
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        mini_description
      }
    }
  }
}
`

export default HowToPage;