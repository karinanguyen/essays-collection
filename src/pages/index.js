import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
//import Section from "..components/Section"

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
      <Link to="https://www.karinanguyen.co/"><button>Learn my work</button></Link>
      <svg width="100%" height="182" viewBox="0 0 2560 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="black">
          <animate repeatCount="indefinite" fill="freeze" 
          attributeName="d" dur="10s" 
          values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; 
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          "> 
          </animate>
        </path> 
      </svg>
      {/* <Link to="/using-typescript/">Medium</Link> */}
      </div>
    </div>

    <div className="Cards">
      <div className = "CardGroup">
        <Card
          title="Working at the NYTimes"
          text="The moment of historic upheaval: Elections 2020 during pandemic"/>
        <Card
          title="Politics of Design"
          text="Everything must come from one piece. The object has been waiting"/>
        <Card
          title="The Future of Fashion"
          text="Can the groundbreaking future be organic embracing the nature?"/>
        <Card
          title="Reasonable Minds Differ"
          text="What's at stake of law, technology, and human rights?"/>
        <Card
          title="Stuck at US-Mexico Border"
          text="What do you have to sacrifice for truth?"/>
        <Card
          title="Alone in Chicago"
          text="What they will never tell about Chicago"/>
        <Card
          title="Theatrical Spotlight"
          text="I had to kiss a guy on stage for the play. The show must go on."/>
        <Card
          title="Music School is Hard"
          text="No, you don't want to go to the music school."/>
        <Card
          title="Nazi Concentration Camp"
          text="A school trip to Germany I will never forget."/>
        <Card
          title="Black CEOs are the Best"
          text="What I learned from my experience at a startup founded by two Blacks."/>
        <Card
          title="Usually It Snows in April"
          text="My memories and life in a boarding high school in New Hampshire."/>
        <Card
          title="The Subway Song"
          text="My relationship with Soviet subways in my hometown."/>
        <Card
          title="Self-Declining Race"
          text="I never feel Asian and probably won't, no matter how much I try."/>
        <Card
          title="Girl in Translation"
          text="Some things are getting lost in translations. "/>
        <Card
          title="America is the Midwest"
          text="Reflections on my time and job in Kansas City."/>
        <Card
          title="I lived with 12 families"
          text="Absolutely different cultures, lifestyles, and values"/>
        </div>
    </div>
    <Section
      image ={require('../images/white.png')}
      logo = {require('../images/logo.png')}
      title = "Illustrations"
      text = "This is the collection of illustrations"
    />

  </div>
)

export default IndexPage



