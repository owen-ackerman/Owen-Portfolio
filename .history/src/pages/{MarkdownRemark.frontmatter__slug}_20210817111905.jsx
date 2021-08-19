import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({ data, children }) => {
  const { nodes } = data; // data.markdownRemark holds your post data
  const { frontmatter } = nodes;
  return <Layout pageTitle={frontmatter.title}>{children}</Layout>;
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        id
      }
    }
  }
`;

export default contactinfo;
