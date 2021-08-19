import * as React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <Layout pageTitle={data.allmdx.nodes[0].frontmatter.title}></Layout>
    )}
  ></StaticQuery>
);

export default Header;
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
