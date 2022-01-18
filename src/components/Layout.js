import * as React from 'react';

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <p>Parrot Academy</p>
            </nav>

            <main>
                {children}
            </main>

        </div>
    )
}

export default Layout;