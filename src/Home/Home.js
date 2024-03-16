import React, {useEffect} from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import ServiceCard from '../ServiceCard/serviceCard';
import Help from '../Help/help';
import TeamSection from '../Teams/teams';
import MainSection from '../MainSection/mainSection';

function Home() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add('animation');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Développement de Logiciels sur Mesure",
      description: "Développer des solutions logicielles sur mesure pour les entreprises en fonction de leurs besoins spécifiques. Cela pourrait inclure des applications web, des applications mobiles, des logiciels d'entreprise, etc.",
      imageUrl: "pngtree-software-development-isometric-web-concept-png-image_13227513.png",
    },

    {
        id: 2,
        title: "Services de Consultance Informatique",
        description: "Offrir des services de consultation aux entreprises cherchant à optimiser leur infrastructure informatique, à mettre en œuvre de nouvelles technologies, à améliorer la cybersécurité ou à rationaliser leurs processus informatiques.",
        imageUrl: "image_infrastructure_informatique.png",
      },
    {
        id: 2,
        title: "Services de Cybersécurité",
        description: "Offrir des services de cybersécurité pour protéger les entreprises contre les menaces cybernétiques, notamment les tests de pénétration, les évaluations de vulnérabilité, les audits de sécurité et la planification de la réponse aux incidents.",
        imageUrl: "2092663.png",
    },
    {
        id: 2,
        title: "Gestion de Projet Informatique",
        description: "Fournir des services de gestion de projet pour les projets informatiques, aidant les entreprises à planifier, exécuter et surveiller leurs initiatives informatiques de manière efficace, en veillant à ce qu'elles soient livrées dans les délais et dans les limites du budget.",
        imageUrl: "Logiciels-gestion-de-projets.png",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Fournir des services de gestion de projet pour les projets informatiques, aidant les entreprises à planifier, exécuter et surveiller leurs initiatives informatiques de manière efficace, en veillant à ce qu'elles soient livrées dans les délais et dans les limites du budget.",
      imageUrl: "Logiciels-gestion-de-projets.png",
  },
  {
    id: 2,
    title: "Marketing digital",
    description: "Fournir des services de gestion de projet pour les projets informatiques, aidant les entreprises à planifier, exécuter et surveiller leurs initiatives informatiques de manière efficace, en veillant à ce qu'elles soient livrées dans les délais et dans les limites du budget.",
    imageUrl: "Logiciels-gestion-de-projets.png",
},
    
    // Add more services as needed
];

  return (
    <div>
  <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="header-text">
              <Carousel>
              <Carousel.Item>
                <div className='animation-1'>
                  <h2 className="title">Bienvenue chez Applicodetech</h2>
                  <p className="description">Votre solution informatique pour un avenir numérique.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='animation-2'>
                  <h2 className="title">Services Informatiques Avancés</h2>
                  <p className="description">Exploitez la Puissance de la Technologie pour Votre Entreprise.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='animation-3'>
                  <h2 className="title">Des Solutions Informatiques Innovantes</h2>
                  <p className="description">Donnez de l'Élan à Votre Entreprise avec des Solutions Informatiques de Pointe.</p>
                </div>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
          <div className="col-md-6 text-right position-relative">
            <img src="my-vector-coder.gif" alt="my-pic" className="header-image" />
            </div>

          <div className='deco-right-side'>
             <span></span>
          </div>
        </div>
      </div>
    </header>
    <Container>
    <h2 className="text-center mb-4 animate-2"
 style={{  color: "#ff510058", 
 padding: "10px", marginTop:"15px", display: "flex",
  justifyContent: "center", alignItems: "center" }}>À propos  </h2>
      <Row>
        <Col md={6}>
        <img src="aboutus.gif" alt="my-pic" className="header-image animate" />
        </Col>
        <Col md={6}>
          <div className="about-description mt-5 animate">
            <h3>Notre Mission</h3>
            <p>
              Notre mission chez ApplicodeTech est de fournir des solutions innovantes en matière de technologie pour répondre aux besoins de nos clients. Nous nous spécialisons dans le développement d'applications sur mesure, le codage de qualité et l'intégration de la technologie de pointe pour permettre à nos clients de prospérer dans un monde numérique en constante évolution.
            </p>
            <h3>Nos Valeurs</h3>
            <ul>
              <li>Application: Nous nous engageons à appliquer notre expertise technologique pour résoudre les défis commerciaux de nos clients de manière efficace et novatrice.</li>
              <li>Codage: Nous croyons en un codage de qualité qui garantit des solutions robustes, fiables et évolutives.</li>
              <li>Technologie: Nous restons à l'avant-garde de la technologie pour offrir à nos clients les outils les plus avancés et les plus pertinents pour atteindre leurs objectifs commerciaux.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
<h2 className="text-center mb-4 animate-2" style={{color: "#ff510058", padding: "10px", marginTop:"15px" }}>Nos Services</h2>
            <Row>
                {services.map(service => (
                    <Col key={service.id} md={4} className="mb-3 animate">
                        <ServiceCard service={service} />
                    </Col>
                ))}
            </Row>
        </Container>
        <Help />
        <MainSection />
        <TeamSection />
    </div>
  
  );
}

export default Home;
