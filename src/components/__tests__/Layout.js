import React from "react";
import renderer from 'react-test-renderer';
import { StaticQuery } from "gatsby";
import Layout from "../Layout";

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: `Parrot Academy`,
                },
            },
        })
    )
})


describe("Layout", () =>
    it("renders correctly", () => {
        const tree = renderer.create(<Layout pageTitle=""></Layout>).toJSON()
        expect(tree).toMatchSnapshot()
    }))