import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = (props) => {
  const {
    data: {
      allMdx: { nodes },
    },
  } = props;
  const { frontmatter } = nodes[0];

  return <Layout pageTitle={frontmatter.title}></Layout>;
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date
          slug
          title
          id
        }
      }
    }
  }
`;

export default contactinfo;
