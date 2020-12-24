import React from "react";

import "../style/About.css";
const About = () => {
  return (
    <div className="about" >
      <div className="head" id='about'>
        <h1 className='about__head'>ABOUT</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
      <div className="parallax2">
        <div className="rooms" id='rooms'>
          <h1>OUR ROOMS</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <button className='about__btn btn btn-dark'>Book A Room</button>
        </div>
      </div>
    </div>
  );
};

export default About;
