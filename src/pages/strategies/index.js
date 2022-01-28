import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentList from '../../components/ContentList';
import { textGrey, textCenter } from '../../styles/base.module.css';

const StrategiesPage = ({ data }) => {

  return (

    <Layout pageTitle="Strategies">
      <div className={textCenter}>
        <h1>Strategies</h1>
        <p className={textGrey}> Effiiently use Parrot to generate the best yield </p>
      </div>

      <ContentList contents={data.allMdx.nodes} />

    </Layout>

  )


}

export const query = graphql`
query {
  allMdx(filter: {frontmatter: {category: {eq: "strategies"}}}) {
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
      }
    }
  }
}
`

export default StrategiesPage;