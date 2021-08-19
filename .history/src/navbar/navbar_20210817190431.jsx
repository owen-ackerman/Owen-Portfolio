import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

export default function Navbar() {
  return (
    <nav>
      <div class="container-fluid">
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
      </div>
    </nav>

    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <Link to="/" class="navbar-brand">
    //       Navbar
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>

    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <Link to="/" class="nav-link active" aria-current="page">
    //             Home
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link to="/about" class="nav-link">
    //             About
    //           </Link>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <Link
    //             class="nav-link dropdown-toggle"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             MD Files
    //           </Link>
    //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <Link to="/Owen_Ackerman_Contact" class="dropdown-item">
    //                 Contact Info
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/battleship" class="dropdown-item">
    //                 Battleship
    //               </Link>
    //             </li>
    //             <li>
    //               <hr class="dropdown-divider"></hr>
    //             </li>
    //             <li>
    //               <Link to="/cheatsheet" class="dropdown-item">
    //                 MD cheatsheet
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <Link
    //             class="nav-link disabled"
    //             to="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </Link>
    //         </li>
    //       </ul>
    //       <form class="d-flex"></form>
    //     </div>
    //   </div>
    // </nav>
  );
}
