import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ACT.png'; // Import your logo from your assets directory

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle menu state
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

    return (
        
        <header className="header">
            <a href='/'>
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span>&#9776;</span>
            </div>
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Nos services</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className="dropdown">
                        <Link className="dropbtn">Formations<i className="fas fa-angle-down"></i></Link>
                        <div className="dropdown-content">
                            <div className="row">
                            <div className="col">
                                <Link to="/formation1">Programmation</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation2">Algorithme</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Intéligence artificielle</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Cybersécurité</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Internet des objets</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Base de données</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Marckting digital</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Analyse de données</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Système d'administration</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Machine Learning</Link>
                            </div>
                            <div className="col">
                                <Link to="/formation3">Deep Learning</Link>
                            </div>
                            {/* Add more formation links as needed */}
                            </div>
                        </div>
                        </li>
                    <li className="contact-link"><Link to="/contact">Nous contacter</Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;
