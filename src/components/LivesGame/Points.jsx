import React from 'react';
import { Container } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const PointsBar = ({ points }) => {
  const progressWidth = `${(points / 100) * 100}%`; 

  return (
    <Container className="d-flex justify-content-center align-items-center flex-column my-5">
      <p className="text-info fw-bold fs-3">
        Points: {points}
      </p>
      <div className="progress w-50">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: progressWidth }}
          aria-valuenow={points}
          aria-valuemin="0"
          aria-valuemax="100" 
        />
      </div>
    </Container>
  );
};

export default PointsBar;
