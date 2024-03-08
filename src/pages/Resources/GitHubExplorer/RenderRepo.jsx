import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function RenderRepo({ repo }) {
  return (
    <Col md={6} className="my-3">
      <Card className="h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{repo.name}</Card.Title>
          <Card.Text className="flex-grow-1">{repo.description || 'No description available.'}</Card.Text>
          <Card.Text>
            Stars: <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count},  
						Forks: <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks_count}
            {/* Watchers: <FontAwesomeIcon icon={faEye} /> {repo.subscribers_count}, */}             
          </Card.Text>
          {repo.homepage && (
            <Card.Text>
              <strong>Deployed Project:</strong> 
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.homepage}</a>
            </Card.Text>
          )}
          <Button href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary gradient-bg-blue rounded-pill mt-auto">View on GitHub</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RenderRepo;
