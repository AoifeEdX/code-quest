import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

function Compass({ onClick }) {
  const handleMove = (direction) => {
    onClick(direction);
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center m-4">
          <Button variant="warning" onClick={() => handleMove('north')}>NORTH</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6} md={3} className="text-center">
          <Button variant="warning" onClick={() => handleMove('west')}>WEST</Button>
        </Col>
        <Col xs={6} md={3} className="text-center">
          <Button variant="warning" onClick={() => handleMove('east')}>EAST</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center m-4">
          <Button variant="warning" onClick={() => handleMove('south')}>SOUTH</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Compass;
