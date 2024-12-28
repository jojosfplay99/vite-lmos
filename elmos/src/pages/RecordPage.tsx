// src/pages/HomePage.jsx
import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';

import RecordMainTable from '../tables/recordmain'

function RecordPage() {
  return (
    <Container className='py-5'>
      <Card>        
        <Card.Body>          
          <RecordMainTable/>
        </Card.Body>
      </Card> 
    </Container>
  );
}

export default RecordPage;