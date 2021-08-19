import * as React from "react";
import Layout from "../components/layout";
//import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

const contactinfo = ({ children }) => {
  return <Layout pageTitle="MD Cheatsheet">{children}</Layout>;
};

// export const query = graphql`
//   {
//     allMdx {
//       nodes {
//         frontmatter {
//           date
//           slug
//           title
//         }
//         id
//       }
//     }
//   }
// `;

export default contactinfo;
