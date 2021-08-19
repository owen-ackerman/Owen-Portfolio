import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
