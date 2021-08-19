import * as React from "react";
import Layout from "../components/layout";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({ children }) => {
  return <Layout pageTitle="Contact info template">{children}</Layout>;
};
export default contactinfo;
// export const query = graphql`
//   query {
//     mdx {
//       frontmatter {
//         date
//         id
//         slug
//         title
//       }
//     }
//   }
// `;
