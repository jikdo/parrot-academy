import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentList from '../../components/ContentList';

const HowToPage = ({ data }) => {

  return (

    <Layout pageTitle="How To">
      <div>
        <h2>How to use Parrot Protocol</h2>
        <p> Concise tutorials for users </p>
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
      }
    }
  }
}
`

export default HowToPage;