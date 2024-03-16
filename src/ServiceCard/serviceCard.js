import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={service.imageUrl} alt={service.title} />
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        {/* Add any additional content or features here */}
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
