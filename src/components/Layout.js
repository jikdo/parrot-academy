import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import "@fontsource/roboto";
import { StaticImage } from 'gatsby-plugin-image';
import { container, navHeading, navBar, navItems, navToggle, navItemsBody, navHeadingContainer } from '../styles/layout.module.css';

const Layout = ({ data, pageTitle, children }) => {

    return (
        <div className={container}>
            <title>{data.site.siteMetadata.title} | {pageTitle}</title>
            <nav className={navBar}>
                <div className={navHeadingContainer}>
                    <Link to="/">
                        <div className={navHeading}>
                            <StaticImage width={40} src="../images/parrot-academy-logo.png" alt="academy logo" />
                            <span>Parrot Academy</span>
                        </div>
                    </Link>

                    <div className={navToggle}></div>
                </div>



                <div className={navItemsBody}>

                    <ul className={navItems}>
                        <li>Join Community</li>
                        <li>Contribute</li>
                    </ul>
                </div>
            </nav>

            <main>
                {children}
            </main>

        </div>
    )
}

export default function WrapperLayout(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
        `}
            render={data => <Layout data={data} {...props} />}
        />
    )
}