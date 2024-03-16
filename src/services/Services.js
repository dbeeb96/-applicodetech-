import React from "react";
import ServiceCard from "../ServiceCard/serviceCard";
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Développement de Logiciels sur Mesure",
      description: "Développer des solutions logicielles sur mesure pour les entreprises en fonction de leurs besoins spécifiques. Cela pourrait inclure des applications web, des applications mobiles, des logiciels d'entreprise, etc.",
      imageUrl: "pngtree-software-development-isometric-web-concept-png-image_13227513.png",
    },
    {
      id: 2,
      title: "Services de Cybersécurité",
      description: "Offrir des services de cybersécurité pour protéger les entreprises contre les menaces cybernétiques, notamment les tests de pénétration, les évaluations de vulnérabilité, les audits de sécurité et la planification de la réponse aux incidents.",
      imageUrl: "image_infrastructure_informatique.png",
    },
    // Add more services as needed
  ];

  return (
    <Container>
      <h2 className="text-center mb-4" style={{ backgroundColor: "#ff510058", color: "#fff", padding: "10px", marginTop: "15px" }}>Nos Services</h2>
      <Row className="mb-4">
        <Col md={6}>
          <img src="logonav.png" alt="Services" className="img-fluid" />
        </Col>
        <Col md={6}>
          <p className="lead">
            Nous proposons une gamme complète de services informatiques personnalisés pour répondre aux besoins uniques de votre entreprise. De la conception et du développement de logiciels sur mesure à la consultation en matière d'infrastructures informatiques, en passant par la cybersécurité et la gestion de projets informatiques, nous sommes là pour vous accompagner à chaque étape de votre parcours numérique. Notre équipe d'experts qualifiés met en œuvre des solutions innovantes et adaptées, vous permettant d'optimiser vos opérations, de renforcer votre sécurité informatique et d'atteindre vos objectifs commerciaux avec succès. Faites confiance à notre expertise pour faire progresser votre entreprise dans l'ère numérique.
          </p>
        </Col>
      </Row>
      <Row>
        {services.map(service => (
          <Col key={service.id} md={4} className="mb-3">
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
