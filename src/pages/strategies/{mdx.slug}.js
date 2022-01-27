import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';
import { articleContent, articleTitle, articleImage } from '../../styles/contentdetail.module.css';

const ContentPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={articleContent}>
        <p>Home > Strategies</p>
      <h2 className={articleTitle}>{data.mdx.frontmatter.title}</h2>
        <img className={articleImage} src="https://i.postimg.cc/ZK2ZxcH1/photo-1499781350541-7783f6c6a0c8.jpg" alt="article" />
       
        <p>{data.mdx.frontmatter.date}</p>

        <p><MDXRenderer>{data.mdx.body}</MDXRenderer></p>
      </div>

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