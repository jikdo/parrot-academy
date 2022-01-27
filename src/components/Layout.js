import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import "@fontsource/roboto";
import { container, navHeading, navBar } from '../styles/layout.module.css';

const Layout = ({ data, pageTitle, children }) => {

    return (
        <div className={container}>
            <title>{data.site.siteMetadata.title} | {pageTitle}</title>
            <nav className={navBar}>
                <p className={navHeading}><Link to="/"> 🎓 Parrot Academy</Link></p>
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