import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Lives = ({ lives }) => {
  const hearts = Array.from({ length: lives }, (_, index) => (
    <span key={index}>❤️</span>
  ));

  return (
    <Container>
      <Row>
        <Col className="text-center">
				<p className="text-danger fw-bold fs-3">Lives:</p>
        </Col>
      </Row>
      <Row>
        <Col className="display-5 mb-5 text-center">
          {hearts.map((heart, index) => (
            <span key={index}>{heart}</span>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Lives;
