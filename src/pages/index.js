import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className = "HeroGroup">
      <SEO title="Home" />
      <h1>interface sémaphore</h1>
      <p>this is the collection of essays by Karina Nguyen.</p>
       {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> 
       <Image />
        </div>*/} 
      <Link to="https://www.karinanguyen.co/">Learn my work</Link>
      {/* <Link to="/using-typescript/">Medium</Link> */}
      </div>
    </div>
  </div>
)

export default IndexPage
