import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

describe('Layout', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Layout pageTitle="Placeholder"> </Layout>).toJSON()
        expect(tree).toMatchSnapshot()
    })
});