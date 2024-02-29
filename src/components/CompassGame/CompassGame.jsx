import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Compass from './Compass'; 
import roomData from './rooms.json'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function CompassGame() {
  const [currentRoom, setCurrentRoom] = useState('hall');
  const [rooms, setRooms] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setRooms(roomData); 
  }, []);

  const move = (direction) => {
    if (rooms[currentRoom] && rooms[currentRoom][direction]) {
      setCurrentRoom(rooms[currentRoom][direction]);
      setErrorMessage('');
    } else {
      setErrorMessage("You can't go that way!");
    }
  };

  const currentRoomInfo = rooms[currentRoom] || {};
  const availableDirections = Object.keys(currentRoomInfo).filter(key => key !== 'description' && key !== 'image');

  return (
    <Container fluid className="m-5 p-5">
			<h1 className="my-5">Where's my phone?</h1>
      <Row>
        <Col md={6} className="my-5">
          <img src={currentRoomInfo.image} alt={currentRoom} style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col md={6} className="my-5">         
          <div id="output" className="mt-5">
            <p className="fs-4">{currentRoomInfo.description}</p>
            <p>"{currentRoomInfo.thought}"</p>
						{errorMessage && <p className="text-danger">{errorMessage}</p>}
						<p><strong>You can go:</strong> {currentRoomInfo.direction}</p>         
          </div>
          <Compass directions={availableDirections} onClick={move} />
        </Col>
      </Row>
    </Container>
  );
}

export default CompassGame;
