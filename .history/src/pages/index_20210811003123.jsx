import * as React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.css";

const indexPage = () =>{
  return (
    <main>
      <h1>Welcome!</h1>
      <p>This is my gatsby site</p>
      <Link to="/about">About</Link>
    </main>
    )
}

export default indexPage