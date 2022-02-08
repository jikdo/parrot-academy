import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleTitle, articleContent, articleNav } from '../styles/contentdetail.module.css';
import { textGrey } from '../styles/base.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ContentDetail = ({ data }) => {
    return (
        <div>
            <div className={articleContent}>
                <p className={articleNav}><Link to="/">Home</Link> > <Link to={`/${data.mdx.frontmatter.category}`}>{data.mdx.frontmatter.category.split("-").join(" ")} </Link>  > <span className={textGrey}>Article</span></p>
                <h2 className={articleTitle}>{data.mdx.frontmatter.title}</h2>
                <p className={textGrey}>{data.mdx.frontmatter.date}</p>
                <GatsbyImage image={(() => getImage(data.mdx.frontmatter.hero_image))()} alt={data.mdx.frontmatter.hero_image_alt} />

                <p><MDXRenderer>{data.mdx.body}</MDXRenderer></p>
            </div>
        </div>
    )
}

export default ContentDetail;