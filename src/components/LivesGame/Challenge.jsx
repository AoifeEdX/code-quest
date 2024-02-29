import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Challenge = ({ onSubmit, currentQuestion }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = event.target.answer.value;
    onSubmit(answer);
    event.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={currentQuestion.image} alt={currentQuestion.name} />
        </Col>
        <Col md={6}>
          <div className="my-5">
            <h2>{currentQuestion.name}</h2>
            <p className="text-start">{currentQuestion.description}</p>
            <p className="text-start">{currentQuestion.instruction}</p>
          </div>
          <h2>{currentQuestion.question}</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="answer" className="bg-white text-dark p-2 m-4" />
            <Button className="m-2" type="submit">Submit</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Challenge;
