import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import {
  hero,
  heroHeading,
  heroParagraph,
  category,
  categoryItem,
  categoryItemHeading,
  featured,
} from '../styles/index.module.css';
import { textGrey } from '../styles/base.module.css';

import ContentList from "../components/ContentList";


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <div className={hero}>
        <h1 className={heroHeading}>Become a Parrot ecosystem expert.</h1>
        <p className={heroParagraph}>Discover how parrot works, and find the best strategies to boost your yield</p>
        <div className={category}>
          <div>
            <Link to="/getting-started">
              <div className={categoryItem}>
                <span>📚</span>
                <ul>
                  <li className={categoryItemHeading}>Getting Started</li>
                  <li className={textGrey}>See More </li>
                </ul>
              </div>
            </Link>
          </div>
          <div >
            <Link to="/how-to">
              <div className={categoryItem} >
                <span>🛠️</span>
                <ul>
                  <li className={categoryItemHeading}>How To</li>
                  <li className={textGrey}>See More </li>
                </ul>
              </div>
            </Link>
          </div>
          <div >
            <Link to="/strategies">
              <div className={categoryItem}>
                <span>♟️</span>
                <ul>
                  <li className={categoryItemHeading}>Strategies</li>
                  <li className={textGrey}>See More </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* featured */}
      <section className={featured}>
        <h2>Featured</h2>
        <ContentList contents={data.allMdx.nodes} />
      </section>



    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(filter: {frontmatter: {featured: {eq: true}}}) {
    nodes {
      id
      frontmatter {
        category
        date
        title
      }
      slug
    }
  }
}
`

export default IndexPage;
