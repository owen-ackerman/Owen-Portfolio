import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

export default function contactinfo(children) {
  const data = useStaticQuery(graphql`
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
  `);
  return <Layout pageTitle={data.mdx.frontmatter.title}>{children}</Layout>;
}

// const contactinfo = ({ data, children }) => {
//   const { mdx } = data;
//   const { frontmatter } = mdx;

//   return <Layout pageTitle={frontmatter.title}>{children}</Layout>;
// };

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

// export default contactinfo;
