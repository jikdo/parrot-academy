import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentList from '../../components/ContentList';

const GettingStartedPage = ({ data }) => {

  return (

    <Layout pageTitle="Getting Started">
      <div>
        <h2>Getting Started</h2>
        <p>Beginner friendly articles to help you jumpstart your understanding of what Parrot offers</p>
      </div>

      <ContentList contents={data.allMdx.nodes} />

    </Layout>

  )


}

export const query = graphql`
query {
  allMdx(filter: {frontmatter: {category: {eq: "getting-started"}}}) {
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

export default GettingStartedPage;