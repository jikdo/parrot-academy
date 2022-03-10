import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleTitle, articleContent, articleNav } from '../styles/contentdetail.module.css';
import { textGrey } from '../styles/base.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from './seo';

const ContentDetail = ({ data }) => {
    return (
        <div>
           <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.hero_image ? data.mdx.frontmatter.hero_image.publicURL : ''} description="xxx" article/>
            <div className={articleContent}>
                <p className={articleNav}><Link to="/">Home</Link> > <Link to={`/${data.mdx.frontmatter.category}`}>{data.mdx.frontmatter.category.split("-").join(" ")} </Link>  > <span className={textGrey}>Article</span></p>
                <h1 className={articleTitle}>{data.mdx.frontmatter.title}</h1>
                <p className={textGrey}>{data.mdx.frontmatter.date}</p>
                <GatsbyImage image={(() => getImage(data.mdx.frontmatter.hero_image))()} alt={data.mdx.frontmatter.hero_image_alt} />

                <p><MDXRenderer>{data.mdx.body}</MDXRenderer></p>
            </div>
        </div>
    )
}

export default ContentDetail;