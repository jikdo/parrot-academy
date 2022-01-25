import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

const ContentPage = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>{data.mdx.frontmatter.date}</p>

            <p><MDXRenderer>{data.mdx.body}</MDXRenderer></p>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(
      id: {eq: $id}
      frontmatter: {category: {eq: "strategies"}}
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