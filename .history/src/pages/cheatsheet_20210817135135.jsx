import * as React from "react";
import Layout from "../components/layout";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import "bootstrap/dist/css/bootstrap.css";

const Cheatsheet = ({ children }) => {
  return <Layout pageTitle="cheatsheet">{children}</Layout>;
};
export default Cheatsheet;
