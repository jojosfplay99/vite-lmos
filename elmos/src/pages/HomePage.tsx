// src/pages/HomePage.jsx
import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';

function HomePage() {
  return (    
    <Container className='py-5'>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>            
            <p>This is the main landing page of your application.</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> 
    </Container>
  );
}

export default HomePage;