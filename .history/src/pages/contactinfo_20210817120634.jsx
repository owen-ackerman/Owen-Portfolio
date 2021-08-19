import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({data, children }) => {
  const { 
  const { frontmatter } = nodes[0];

  return <Layout pageTitle={frontmatter.title}>{children}</Layout>;
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
  }
`;

export default contactinfo;
