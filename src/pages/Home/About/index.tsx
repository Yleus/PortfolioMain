import React from 'react';

import { Container, Top, Photo, Texts, ParagraphOne, ParagraphTwo, Education, Experience, CurriculumPdf, DownloadIcon } from './styles';
import Copyright from '../../../components/Copyright';
import image from '../../../images/retrato.jpg'


const About: React.FC = () => {
  return (
    <Container>
      <h1>About</h1>
      <Top>
        <Photo>
          <img src={image} alt="Image of me" />
        </Photo>
        <Texts>
          <ParagraphOne>
            <p>WHO I AM</p>
            <p>I am Paulo Henrique S Gabriel, and I currently live in São Paulo, Brazil. I am studying to become a efficient full stack developer with the goal of contributing to the technological world.</p>

          </ParagraphOne>
          <ParagraphTwo>
            <p>I am motivated by my desire to solve problems efficiently and with a focus on the future. I have experience developing web applications and I am always looking for opportunities to grow my skill set and work with new technologies. I am eager to join a team where I can use my skills to make a positive impact.<br/></p>
            <p>In addition to my passion for web development, I am also deeply interested in artificial intelligence and plan to make it a key focus in my career. I am enthusiastic about finding creative solutions to problems and coming up with new ideas, and the potential for improvement and innovation through AI excites me greatly.</p>
          </ParagraphTwo>


        </Texts>

      </Top>

      <h2>Education</h2>

      <hr />

      <Education>
        <p>College Descomplica (DE)</p>
        <p>July 2022 - July 2024 (Current)</p>
      </Education>

      <Experience>
        <p>Bachelor's degree in Computer Science</p>
        <p>Relevant Coursework:</p>
        <ul>
          <li>Computer Architecture and Organization</li>
          <li>Programming Basics</li>
          <li>Object-Oriented Development</li>
          <li>DB Developer</li>
          <li>Smart Data Structures</li>
          <li>Mobile Developer</li>
          <li>Cloud Platform</li>
          <li>Cloud for Developers</li>
          <li>BI e Big Data</li>
          <li>Data Analytics</li>
          <li>User Experience for Games</li>
          <li>Game Developer</li>
          <li>Scientific Computing</li>
          <li>Distributed Computing</li>
          <li>Applied Artificial Intelligence</li>
          <li>CyberSecurity</li>
        </ul>
      </Experience>

      <hr />

      {/* <Education>
        <p>Udemy</p>
        <p>2022</p>
      </Education>

      <Experience>
        <p>ReactJs (hooks, router, API)</p>
        <p>Scrum and Kanban</p>
      </Experience>

      <hr />

      <Education>
        <p>Rocketseat</p>
        <p>2022</p>
      </Education>

      <Experience>
        <p>HTML, CSS, Javascript, ReactJs, NodeJs</p>
        <p>Git, Github, HTTP, Typescript, SQL</p>


      </Experience>

      <hr />

      <Education>
        <p>DIO</p>
        <p>2022</p>
      </Education>

      <Experience>
        <p>HTML, CSS, Javascript, ReactJs</p>
      </Experience> */}

    <CurriculumPdf>
      <a href="https://drive.google.com/u/0/uc?id=1j5mtXB71-QtOD_vXn2qwIFpYrtNPbPdE&export=download">


        <button>
          <DownloadIcon />
          <p>Download CV</p>
        </button>
      </a>
    </CurriculumPdf>


    <hr />
    <Copyright />


    </Container>
  );
}

export default About;
