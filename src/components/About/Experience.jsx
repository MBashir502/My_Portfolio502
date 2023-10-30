import React from "react";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
import { GiPostOffice } from "react-icons/gi";

const Experience = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        My <strong className="purple">Eperience</strong>
      </h1>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <hr />
            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                Full<span className="purple"> Stack </span>
                <span className="purple">Web</span> Developer
                <br />
                <GiPostOffice />{" "}
                <span style={{ padding: "5px" }}>
                  <span className="purple"></span>A quick learner who can absorb
                  new ideas & can communicate clearly and effectively. Currently
                  looking for an opportunity to join dynamic, ambitious, growing
                  organization. To find the challenging position in the
                  competitive environment where I can deploy my services to
                  enhance the organization value. To work in an organization as
                  an integral part of it and accomplish the job assigned in a
                  better way. I’m looking for a challenging and dynamic work
                  environment in which i can enhance my professional skills and
                  would be able to get valuable work experience. As a Backend
                  Node.js Developer I build high-performance, scalable and
                  reliable server side applications using cutting edge
                  technologies. With a strong foundation in computer science and
                  hands-on experience in Node.js, MongoDB and Express.js I
                  design and maintain RESTful APIs and web applications
                </span>
                <br />
                <br />
                Programming Languages
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> C
                </li>
                <li className="about-activity">
                  <ImPointRight /> C++
                </li>
                <li className="about-activity">
                  <ImPointRight /> Javascript
                </li>
                <li className="about-activity">
                  <ImPointRight /> OOP
                </li>
                <li className="about-activity">
                  <ImPointRight /> Kotlin
                </li>
              </ul>
              <footer className="blockquote-footer">December-2021</footer>
            </div>
            <hr />
            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                Full Stack
                <span className="purple"> Web Developer </span>
                <br />
                <GiPostOffice />{" "}
                <span style={{ padding: "5px" }}>
                  Ideoversity
                  <span className="purple"></span>
                </span>
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Javascript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Typescript
                </li>
                <li className="about-activity">
                  <ImPointRight /> Html/Css
                </li>
                <li className="about-activity">
                  <ImPointRight /> MongoDB
                </li>
                <li className="about-activity">
                  <ImPointRight /> ExpressJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> ReactJs
                </li>
                <li className="about-activity">
                  <ImPointRight /> NodeJs
                </li>
              </ul>
              <footer className="blockquote-footer">
                December-2021 to Augest-2022
              </footer>
            </div>
            <hr />

            <div className="p-3">
              <p style={{ textAlign: "justify" }}>
                Cyber<span className="purple"> Security</span>
                <br />
                <GiPostOffice />{" "}
                <span style={{ padding: "5px" }}>
                  <span className="purple"></span>Government of Pakistan
                  National Vocational & Technical Training Commison (NAVTTC)
                </span>
                <br />
                <br />
                Skills
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> System Administration and Virtualization
                </li>
                <li className="about-activity">
                  <ImPointRight /> linux fundamentals
                </li>
                <li className="about-activity">
                  <ImPointRight /> Scripting
                </li>
              </ul>
              {/* <footer className="blockquote-footer"></footer> */}
            </div>
            <hr />
           
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Experience;
