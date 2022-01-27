import { Link } from 'gatsby';
import React from 'react';
import {
    contentsList,
    contentTitle,
    contentItem,
    contentParagraph,
    contentImage,
    contentCategory,
} from '../styles/contentlist.module.css';

const ContentList = ({ contents }) => {
    return <div className={contentsList}>
        {contents.map(item => <div key={item.id} className={contentItem}>
            <Link to={`/${item.frontmatter.category}/${item.slug}`}>
                <img className={contentImage} src="https://i.postimg.cc/ZK2ZxcH1/photo-1499781350541-7783f6c6a0c8.jpg" alt="article" />
                <p className={contentCategory}>{item.frontmatter.category}</p>
                <h1 className={contentTitle}>{item.frontmatter.title}</h1>
                <p className={contentParagraph}>roin sed metus ut est iaculis placerat in sed leo. Phasellus lacus ex, condimentum sed velit sed, viverra iaculis sapien.
                </p>
            </Link>
        </div>)}

    </div>
}

export default ContentList;