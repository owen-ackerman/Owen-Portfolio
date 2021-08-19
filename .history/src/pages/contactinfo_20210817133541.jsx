import * as React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({ children }) => {
  return <Layout pageTitle="Markdown CheatSheet">{children}</Layout>;
};

export const query = graphql`
  query {
    mdx {
      frontmatter {
        date
        id
        slug
        title
      }
    }
  }
`;

export default contactinfo;
