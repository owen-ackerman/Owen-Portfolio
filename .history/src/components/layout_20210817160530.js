import * as React from "react";
import { Link } from "gatsby";
//import Navbar from "../navbar/navbar";
import Navbar from "../navbar/navbar";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      {/* <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Owen_Ackerman_Contact" className={navLinkText}>
              MDX file
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/battleship" className={navLinkText}>
              BattleShip documentation
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/cheatsheet" className={navLinkText}>
              md cheatsheet
            </Link>
          </li>
        </ul>
      </nav> */}
      <Navbar></Navbar>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
