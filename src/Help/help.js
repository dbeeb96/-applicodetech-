import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import "../help.css"
const Help = () =>{
    return(
        <div>
        <Container className='animate'>
        <h2 className="text-center mb-4 animate"
        style={{  color: "#ff510058", 
        padding: "10px", marginTop:"15px", display: "flex",
        justifyContent: "center", alignItems: "center" }}>Comment Aider les Entreprises</h2>
        <p style={{justifyContent:"center", alignItems: "center",  display: "flex", color: "#ff0000"}}>Le processus</p>
        <Row className='animate-2'>
            <Col md={3} sm={6}>
            <div className="step-card">
                <h3>Étape 1: Analyse des Besoins</h3>
                <p>
                Effectuer une analyse approfondie des besoins spécifiques de
                l'entreprise, en identifiant les défis et les objectifs à
                atteindre.
                </p>
                <FaArrowRight className="arrow-icon" />
            </div>
            </Col>
            <Col md={3} sm={6}>
            <div className="step-card">
                <h3>Étape 2: Conception de Solutions</h3>
                <p>
                Développer des solutions sur mesure en utilisant notre expertise
                technologique pour répondre aux besoins spécifiques de
                l'entreprise.
                </p>
                <FaArrowRight className="arrow-icon" />
            </div>
            </Col>
            <Col md={3} sm={6}>
            <div className="step-card">
                <h3>Étape 3: Implémentation et Intégration</h3>
                <p>
                Mettre en œuvre les solutions développées de manière transparente
                dans l'infrastructure existante de l'entreprise.
                </p>
                <FaArrowRight className="arrow-icon" />
            </div>
            </Col>
            <Col md={3} sm={6}>
            <div className="step-card">
                <h3>Étape 4: Support et Évolution</h3>
                <p>
                Fournir un soutien continu et une maintenance pour garantir le
                bon fonctionnement des solutions mises en place.
                </p>
            </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Help;