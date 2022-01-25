import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentList from '../../components/ContentList';

const StrategiesPage = ({ data }) => {

  return (

    <Layout pageTitle="Strategies">
      <div>
        <h2>DeFi strategies using Parrot Protocol</h2>
        <p> Effiiently use Parrot to generate the best yield </p>
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
      }
    }
  }
}
`

export default StrategiesPage;