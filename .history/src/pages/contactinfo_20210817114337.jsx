import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({ data, children }) => {
  return (
    <Layout pageTitle={data.allMdx.nodes.frontmatter.title}>{children}</Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date
          slug
          title
          id(id: 1)
        }
      }
    }
  }
`;

export default contactinfo;
