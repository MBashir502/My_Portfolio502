import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import DigitalClock from "../../Assets/Projects/Digital_Clock.png";
import API from "../../Assets/Projects/API.png";
import loginPage from "../../Assets/Projects/loginPage.png";
import NewsAPI from "../../Assets/Projects/NewsAPI.png";
import product from "../../Assets/Projects/product.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DigitalClock}
              isBlog={false}
              title="My Plan"
              description="To represent the time, most digital clocks use a seven-segment display. It shows hours, minutes and seconds and can be set to show in both 24 hours and 12 hours format.
              "
              ghLink="https://github.com/MBashir502/DigitalClock_Project-MBashir502"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="My Plan"
              description=""
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loginPage}
              isBlog={false}
              title="My Plan"
              description="
              "
              ghLink="https://github.com/MBashir502/LoginPage_Responsive"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsAPI}
              isBlog={false}
              title="My Plan"
              description="
              "
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="My Plan"
              description="
              "
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
