import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = (props) => {
  return (
    
    const {data:{allMdx: {nodes}}} = props;
    
    <Layout>
      
    </Layout>
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
          id
        }
      }
    }
  }
`;

export default contactinfo;
