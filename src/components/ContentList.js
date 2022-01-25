import { Link } from 'gatsby';
import React from 'react';

const ContentList = ({ contents }) => {
    return <div>
        <ul>
            {contents.map(item => <li key={item.id}>
               <Link to={`/${item.frontmatter.category}/${item.slug}`}> {item.frontmatter.title} </Link>
                </li>)}
        </ul>
    </div>
}

export default ContentList;