import React from 'react';
import { Container } from 'react-bootstrap'; // Import Bootstrap components
import TeamMember from './TeamMember'; // Import your TeamMember component
import Slider from 'react-slick'; // Import Slider component from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS

const TeamSection = () => {
  // Sample data for team members
  const teamMembers = [
    { id: 1, name: 'Babacar', role: 'Co-fondateur', imageUrl: 'me.jpg' },
    { id: 2, name: 'Néné', role: 'Developpeuse FullStack', imageUrl: 'neneba.jpg' },
    { id: 3, name: 'Marie', role: 'Co-fondatrice', imageUrl: 'marie.jpg' },
    { id: 4, name: 'Hamid', role: 'Infographiste', imageUrl: 'leuz.jpg' },
    { id: 5, name: 'Faty', role: 'Developpeurse FullStack', imageUrl: 'team5.jpg' },
    // Add more team members as needed
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 team members at a time
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Auto slide every 3 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 team members at a time on smaller screens
        },
      },
    ],
  };

  // Function to render team member items
  const renderTeamMembers = () => {
    return teamMembers.map(member => (
      <div key={member.id} className="px-2">
        <TeamMember member={member} />
      </div>
    ));
  };

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4 animate" style={{ color: "#ff510058", padding: "10px", marginTop: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>Notre équipe</h2>
      <p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#ff0000" }}>Les membres de act et leurs profils</p>
      <Slider {...sliderSettings}>{renderTeamMembers()}</Slider>
    </Container>
  );
};

export default TeamSection;
