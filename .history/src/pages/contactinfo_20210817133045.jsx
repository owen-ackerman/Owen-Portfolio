import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            date
            id
            title
          }
        }
      }
    }
  `);
  return <Layout pageTitle={data.allmdx.frontmatter[0].title}></Layout>;
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
