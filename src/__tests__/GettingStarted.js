import { StaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import GettingStartedPage from '../pages/getting-started/index';

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => {
        render({
            "allFile": {
                "nodes": [
                    {
                        "id": "bcb61720-1126-5e31-bbb7-a9cec40b4843",
                        "name": "sample"
                    }
                ]
            }
        })
    })
})

describe('GettingStarted', () => {
    it('It renders correctly', () => {
        const data = {
            "allFile": {
                "nodes": [
                    {
                        "id": "bcb61720-1126-5e31-bbb7-a9cec40b4843",
                        "name": "sample"
                    }
                ]
            }
        }
        const tree = renderer.create(<GettingStartedPage data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

});