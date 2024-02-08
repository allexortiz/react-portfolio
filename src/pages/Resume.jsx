import React from "react";
import myResume from "../assets/allex-ortiz-resume.pdf";
import { BsCloudDownloadFill } from "react-icons/bs";
export default function Resume() {
  return (
    <div>
      <section>
        <div className="d-flex justify-content-center">
          <h1>Resume & Skills<a className="ms-4" href={myResume} download data-bs-toggle="tooltip" data-bs-placement="top" title="download my resume">
            <BsCloudDownloadFill size={30} /></a></h1>
        </div>
      </section>
      <div className="container vh-100 d-flex justify-content-center align-items-center flex-column">
        <h2 className="mb-5">Skills I learned in full-stack coding bootcamp:</h2>
        <section className="row gx-4 justify-content-center">
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Font-End Tech</h3>
              <ul className="fs-4">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>APIs</li>
                <li>Bootstrap</li>
                <li>GIT</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Back-End Tech</h3>
              <ul className="fs-4">
                <li>Node.Js</li>
                <li>Jest</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>Object-Relational Mapping(ORM)</li>
                <li>Model View Controller(MVC)</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <h3>Performance Tech</h3>
              <ul className="fs-4">
                <li>NoSQL</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>MERN</li>
                <li>State</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}