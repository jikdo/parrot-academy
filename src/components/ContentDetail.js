import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { articleTitle, articleContent, articleImage, articleNav } from '../styles/contentdetail.module.css';
import { textGrey } from '../styles/base.module.css';
import { Link } from 'gatsby';

const ContentDetail = ({ data }) => {
    return (
        <div>
            <div className={articleContent}>
                <p className={articleNav}><Link to="/">Home</Link> > <Link to="/getting-started">{data.mdx.frontmatter.category.split("-").join(" ")} </Link>  > <span className={textGrey}>Article</span></p>
                <h2 className={articleTitle}>{data.mdx.frontmatter.title}</h2>
                <p className={textGrey}>{data.mdx.frontmatter.date}</p>
                <img className={articleImage} src="https://i.postimg.cc/ZK2ZxcH1/photo-1499781350541-7783f6c6a0c8.jpg" alt="article" />
                
                <p><MDXRenderer>{data.mdx.body}</MDXRenderer></p>
            </div>
        </div>
    )
}

export default ContentDetail;