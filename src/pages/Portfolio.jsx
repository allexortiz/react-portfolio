import React from 'react';
import codingQuiz from '../assets/codingQuiz.png'
import plantPal from '../assets/plantPal.png'
import jate from '../assets/jate.png'
import '../styles/Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Coding Quiz",
      description: "A simple coding quiz game",
      image: codingQuiz,
      link: "https://allexortiz.github.io/coding-quiz/",
      secondaryLink: "https://github.com/allexortiz/coding-quiz",
    },
    {
      title: "Plant Pal",
      description: "A web app tailored for Texas gardening",
      image: plantPal,
      link: "https://plant-pal-texas-1fa9c57facba.herokuapp.com/",
      secondaryLink: "https://github.com/allexortiz/plant-pal",
    },
    {
      title: "J.A.T.E.",
      description: "An online or offline text editor.",
      image: jate,
      link: "https://pwa-text-editor-isls.onrender.com/",
      secondaryLink: "https://github.com/allexortiz/pwa-text-editor",
    }
  ];

  return (
    <div>
      <h1 className='d-flex justify-content-center'>My Portfolio</h1>
      <div className="projects-container d-flex align-items-center">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="project-image" />
              <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
                <a href={project.secondaryLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}