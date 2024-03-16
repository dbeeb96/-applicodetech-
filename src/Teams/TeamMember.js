import React from 'react';
import { Card } from 'react-bootstrap';

const TeamMember = ({ member }) => {
  return (
    <Card className="text-center animate" style={{backgroundColor:'#ff7e5f'}}>
      <Card.Img variant="top" src={member.imageUrl} style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '0 auto' }} />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>{member.role}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;
