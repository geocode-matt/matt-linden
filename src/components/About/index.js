import React from 'react';

function About(props) {
    return (
        <section className="about">
        <hr></hr>
        
        <div className="row justify-content-center">
          <div className="col-10" id="about-section">
              <div className="about-writeup">
              
          <div className="ml-photo-container">
              <img className="ml-photo" src="https://raw.githubusercontent.com/geocode-matt/react-portfolio/master/src/assets/images/IMG_1909.jpg" alt="Matt Linden"/>
            </div>
            <p className="text-align-center text-title">
              About Me:
            </p>
            <p>
            Welcome to my portfolio page! I am a Full Stack Web Developer seeking employment in Web/Software Development in the Dallas-Fort Worth, Texas area. Please view my projects and resume and feel free to contact me!
            </p>
      <br></br><br></br>
          <p className="text-align-center text-title">
              My Background:
          </p>
          <p>
          A lifelong enjoyment of working with computers led me to the web development program through UT Austin. My original intent was to apply the skills gained to improve workflows and processes at the company I was working for. Economic hardships brought about by Covid-19 led to the collapse of my company but, refreshingly, has reignited my passion for programming and led me to the total dedication to becoming a full-time developer. My aspiration is to utilize the foundational technical and problem-solving skills I have developed during my ~10 years as a geoscientist and my recent full stack web development training to pursue a career in full stack web development.
          </p>
        </div>
        </div>  
        </div>
        <p className="text-align-center text-title">
        Proficient with these languages and technologies:
          </p>
      <div className="technology-icon-container">
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-python-plain-wordmark colored"></i>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"></i>
        <i className="devicon-foundation-plain-wordmark colored blue"></i>
        <i className="devicon-visualstudio-plain colored"></i>
        <i className="devicon-github-plain-wordmark white"></i>
        <i className="devicon-jquery-plain-wordmark colored"></i>
        <i className="devicon-handlebars-plain-wordmark white"></i>
        <i className="devicon-mysql-plain-wordmark colored blue"></i>
        <i className="devicon-npm-original-wordmark colored"></i>
        <i className="devicon-sequelize-plain colored blue"></i>
        <i className="devicon-express-original colored white"></i>
        <i className="devicon-heroku-original-wordmark colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-angularjs-plain colored"></i>
        <i className="devicon-wordpress-plain-wordmark white"></i>
      </div>
      <br></br><br></br>
      </section>
    )
}

export default About;