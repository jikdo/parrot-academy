import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import "@fontsource/roboto";
import { StaticImage } from 'gatsby-plugin-image';
import { 
    container,
    navHeading,
    navBar,
    navItems,
    navItemsShow,
    navItemsHide,
    navToggle, navItemsBody, navHeadingContainer } from '../styles/layout.module.css';
import Seo from './seo';
import defaultBanner from '../images/default-banner-parrot.png';

const Layout = ({ data, pageTitle, children }) => {
    const [showItems, setShowItems] = React.useState(false);
   
    return (
        <div className={container}>
            <Seo description="Become a Parrot ecosystem expert." image={defaultBanner} />
            <title>{data.site.siteMetadata.title} | {pageTitle}</title>
            <nav className={navBar}>
                <div className={navHeadingContainer}>
                    <Link to="/">
                        <div className={navHeading}>
                            <StaticImage width={40} src="../images/parrotacademylogo.svg" alt="academy logo" />
                            <span>Parrot Academy</span>
                        </div>
                    </Link>

                    <div role="button" tabIndex={0} className={navToggle} onClick={() => {
                        setShowItems(!showItems);
                    }} onKeyDown={() => {
                        setShowItems(!showItems);
                    }}><StaticImage width={40} src="../images/navToggleIcon.svg" alt="toggle" /> </div>
                </div>



                <div className={navItemsBody}>

                    <ul className={`${navItems} ${showItems ? navItemsShow : navItemsHide}`}>
                        <li><a href="https://discord.gg/gopartyparrot" alt="Discord link">Join Community</a></li>
                        <li><a href="https://github.com/jikdo/parrot-academy" alt="Discord link">Contribute</a></li>
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