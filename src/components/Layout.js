import * as React from 'react';
// import "@fontsource/roboto";
import { container, navHeading } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <p className={navHeading}>Parrot Academy</p>
            </nav>

            <main>
                {children}
            </main>

        </div>
    )
}

export default Layout;