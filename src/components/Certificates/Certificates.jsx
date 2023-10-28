import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";
import web from "../../Assets/Cerificates/web.png";
import wordpress from "../../Assets/Cerificates/wordpress.png";
import cyberSecurity from "../../Assets/Cerificates/cyberSecurity.png";
import corvit from "../../Assets/Cerificates/corvit.png";
const Certificates = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few certificates I've earn.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <CertificateCard img={web} title={"Web Development"} />
          </Col>
          <Col md={6} className="project-card">
            <CertificateCard img={wordpress} title={"WordPress"} />
          </Col>
          <Col md={6} className="project-card">
            <CertificateCard img={cyberSecurity} title={"CyberSecurity"} />
          </Col>
          <Col md={6} className="project-card">
            <CertificateCard img={corvit} title={"CyberSecurity"} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Certificates;
