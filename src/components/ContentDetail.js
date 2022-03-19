import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleTitle, articleContent, articleNav } from '../styles/contentdetail.module.css';
import { textGrey } from '../styles/base.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from './seo';
import Layout from './Layout';

const ContentDetail = ({ pageContext }) => {
    const { data } = pageContext;
    return (
        <div>
            <Layout pageTitle={data.frontmatter.title}>
            <Seo title={data.frontmatter.title} image={data.frontmatter.hero_image ? data.frontmatter.hero_image.publicURL : ''} description="" article />
            <div className={articleContent}>
                <p className={articleNav}><Link to="/">Home</Link> > <Link to={`/${data.frontmatter.category}`}>{data.frontmatter.category.split("-").join(" ")} </Link>  > <span className={textGrey}>Article</span></p>
                <h1 className={articleTitle}>{data.frontmatter.title}</h1>
                <p className={textGrey}>Last updated: {data.frontmatter.date}</p>
                <GatsbyImage image={(() => getImage(data.frontmatter.hero_image))()} alt={data.frontmatter.hero_image_alt} />

                <p><MDXRenderer>{data.body}</MDXRenderer></p>
            </div>
            </Layout>
        </div>
    )
}

export default ContentDetail;