import React from 'react';
import backgroundImage from '../assets/dbabs.jpg'; // Import your background image
import '../main.css';
import logo from '../assets/logonav.png'; // Import your logo from your assets directory

const MainSection = () => {
  return (
    <div className="main-section anima" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="right-column">
        <h2>Solutions Informatiques Intégrées.</h2>
        <p>
        Des solutions informatiques personnalisées pour assurer
         la sécurité et la réussite de votre entreprise dans le monde numérique.
        </p>
          <div className='container'>
              <div className='row'>
                   <div className='col-md-2'>
                   <img src={logo} alt="Logo" className="logo animated-logo" style={{width:'100px'}} />
                    </div>
                    <div className='col-md-2'>
                    <ul>
                        <li><a href="/it-solutions"><i class="fas fa-laptop-code"></i> Applications Web</a></li>
                        <li><a href="/formations"><i class="fab fa-codepen"></i> Applications Mobiles</a></li>
                        <li><a href="/services"><i class="fas fa-laptop-code"></i> Logiciels d'Entreprise</a></li>
                        {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <ul>
                        <li><a href="/it-solutions"> Optimisation Informatique</a></li>
                        <li><a href="/formations"> Implémentation Technologique</a></li>
                        <li><a href="/services"> Cybersécurité</a></li>
                        {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <ul>
                        <li><a href="/it-solutions"> Planification de Projet</a></li>
                        <li><a href="/formations"> Suivi de Projet</a></li>
                        <li><a href="/services"> Conception UI/UX</a></li>
                        {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <ul>
                        <li><a href="/it-solutions"> Stratégies de Marketing en Ligne</a></li>
                        <li><a href="/formations"> Optimisation SEO</a></li>
                        <li><a href="/services"> Publicités en Ligne</a></li>
                        {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    <img src={logo} alt="Logo" className="logo animated-logo" style={{width:'100px'}} />
    
                    </div>
                    
              </div>
          </div>
      </div>
    </div>
  );
};

export default MainSection;
