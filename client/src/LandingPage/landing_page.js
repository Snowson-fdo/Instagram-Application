import React from 'react';
import landing from "../Images/landing.png";
import "./landing_page.css"
import { Link } from "react-router-dom";

function Landing_page() {
  return (
    <div className='home'>
      <div className='left'>
        <img src={landing} alt="Home page is landing.. please wait" />
      </div>

      <div className='right'>
        <h1>10x Team 04</h1>
        <Link to="/postview">
          <button id='btn'>Enter</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing_page