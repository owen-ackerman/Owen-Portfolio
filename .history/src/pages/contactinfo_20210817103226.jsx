import * as React from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";

export default function contactinfo ({
    data, // this prop will be injected by the GraphQL query below.
  }) 
  {
        const { markdownRemark } = data // data.markdownRemark holds your post data
        const { frontmatter } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Hello</p>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
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
