import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ContentDetail from '../../components/ContentDetail';

const ContentPage = ({ data }) => {
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
      frontmatter: {category: {eq: "how-to"}}
      ) {
      id
      frontmatter {
        title
        date
        category
      }
      body
    }
  }
`

export default ContentPage;