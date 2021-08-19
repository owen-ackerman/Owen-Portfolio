import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo({
  data, // this prop will be injected by the GraphQL query below.
  children,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;
  return <Layout pageTitle={frontmatter.title}>{children}</Layout>;
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
export default contactinfo;
