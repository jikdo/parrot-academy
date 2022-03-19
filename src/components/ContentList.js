import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    contentsList,
    contentTitle,
    contentItem,
    contentParagraph,
    contentCategory,
} from '../styles/contentlist.module.css';

const ContentList = ({ contents }) => {
    console.log(contents)
    return <div className={contentsList}>
        {contents.map(item => <div key={item.id} className={contentItem}>
            <Link to={`/${item.frontmatter.category}/${item.slug}`}>
                <GatsbyImage image={(() => getImage(item.frontmatter.hero_image))()} alt={item.frontmatter.hero_image_alt} />
                <p className={contentCategory}>{item.frontmatter.category.split("-").join(" ")}</p>
                <h1 className={contentTitle}> {item.frontmatter.title}</h1>
                <p className={contentParagraph}> {item.frontmatter.mini_description}</p>
            </Link>
        </div>)}

    </div>
}

export default ContentList;