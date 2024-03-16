import React from 'react';
import '../footer.css'
import logo from '../assets/ACT.png'; // Import your logo from your assets directory

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ color: '#141312' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* First Column with Logo and Description */}
            <img src={logo} alt="Logo" className="logo" />
            <p>ApplicodeTech est une start-up IT dédiée à 
                fournir des solutions informatiques personnalisées
                 pour les entreprises, les aidant à optimiser leurs
                  opérations et à renforcer leur présence numérique. 
                  </p>
          </div>
          <div className="col-md-3">
            {/* Second Column with Links */}
            <h3>Liens utils : </h3>
            <ul className='links'>
               <div>
            <li><a href>Projets</a></li>
            <li><a href>Formation</a></li>
            <li><a href>Nos services</a></li>
            <li><a href>Blog</a></li>
            <li><a href>UI/UX</a></li>

            </div>

            </ul>
          </div>
          <div className="col-md-3">
            {/* Third Column */}
            <h3>Contacts : </h3>
            <p>Tel : +221 76 609 19 32</p>
            <p>Email : contact@applicodetech.com</p>
            <p>Adresse : Saint-Louis | BP : Rue de Paris | 32000</p>
          </div>
          <div className="col-md-3">
            {/* Fourth Column */}
            <h3>Suivez-nous sur : </h3>
            <ul className="list-inline">
              <li className="list-inline-item"><button><i className="fab fa-facebook"></i></button></li>
              <li className="list-inline-item"><button><i className="fab fa-twitter"></i></button></li>
              <li className="list-inline-item"><button><i className="fab fa-instagram"></i></button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
