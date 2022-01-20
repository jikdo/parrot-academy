import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import {
  hero,
  heroHeading,
  heroParagraph,
  category,
  categoryItem,
  categoryItemHeading,
} from './index.module.css';


const IndexPage = () => {
  return (
    <Layout pageTitle="Parrot Academy">
      <div className={hero}>
        <h1 className={heroHeading}>Become a Parrot ecosystem <br /> expert 🎓.</h1>
        <p className={heroParagraph}>Discover how parrot works, and find the best strategies to boost your yield</p>
        <ul className={category}>
          <li className={categoryItem}>
            <Link to="/getting-started">
              <div>
                <ul>
                  <li className={categoryItemHeading}>Getting Started</li>
                  <li>See More ➡️</li>
                </ul>
              </div>
            </Link>
          </li>
          <li className={categoryItem}>
            <Link>
              <div>
                <ul>
                  <li className={categoryItemHeading}>How To</li>
                  <li>See More ➡️</li>
                </ul>
              </div>
            </Link>
          </li>
          <li className={categoryItem}>
            <Link>
              <div>
                <ul>
                  <li className={categoryItemHeading}>Strategies</li>
                  <li>See More ➡️</li>
                </ul>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    {/* featured */}
      <div>
        <h2 style={{textAlign: 'center'}}>Featured</h2>
      </div>
    </Layout>
  )
}

export default IndexPage;
