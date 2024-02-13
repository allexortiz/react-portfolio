import React from 'react';
import codingQuiz from '../assets/codingQuiz.png'
import plantPal from '../assets/plantPal.png'
import jate from '../assets/jate.png'
import '../styles/Portfolio.css';

export default function Portfolio() {
  // Array containing project details
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
    <div className='d-flex flex-column'>
      {/* Page title */}
      <h1 className='d-flex justify-content-center'>My Portfolio</h1>
      {/* Container for projects */}
      <div className="projects-container d-flex align-items-center">
        {/* Mapping over each project to display */}
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project">
              {/* Project title */}
              <h2>{project.title}</h2>
              {/* Project description */}
              <p>{project.description}</p>
              {/* Container for project image and buttons */}
              <div className='position-relative'>
                {/* Project image */}
                <img src={project.image} alt={project.title} className="project-image" />
                {/* Overlay with buttons */}
                <div className='position-absolute top-0  h-100 w-100 d-flex justify-content-center gap-5 align-items-end'>
                  {/* Button to visit project */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'><button className="btn btn-primary">Visit Project</button></a>
                  {/* Button for source code */}
                  <a href={project.secondaryLink} target="_blank" rel="noopener noreferrer" className="project-link"><button className="btn btn-primary">Source Code</button></a>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}