import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleTitle, articleContent, articleNav } from '../styles/contentdetail.module.css';
import { textGrey } from '../styles/base.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from './seo';

const ContentDetail2 = ({ pageContext }) => {
    const { data } = pageContext;
    return (
        <div>
            <SEO title={data.frontmatter.title} image={data.frontmatter.hero_image ? data.frontmatter.hero_image.publicURL : ''} description="xxx" article />
            <div className={articleContent}>
                <p className={articleNav}><Link to="/">Home</Link> > <Link to={`/${data.frontmatter.category}`}>{data.frontmatter.category.split("-").join(" ")} </Link>  > <span className={textGrey}>Article</span></p>
                <h1 className={articleTitle}>{data.frontmatter.title}</h1>
                <p className={textGrey}>{data.frontmatter.date}</p>
                <GatsbyImage image={(() => getImage(data.frontmatter.hero_image))()} alt={data.frontmatter.hero_image_alt} />

                <p><MDXRenderer>{data.body}</MDXRenderer></p>
            </div>
        </div>
    )
}

export default ContentDetail2;