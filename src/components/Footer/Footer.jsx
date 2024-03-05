import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Container className="py-5">
			<hr className="my-5"></hr>
      <Row>        
			<Col xs={12} md={4} className="mb-5 text-md-start text-center">
          <h5 className="mb-3">Newsletter</h5>
          <p className="fw-light">Get weekly updates on our game releases</p>
          <div className="d-flex">
            <input type="email" className="form-control me-2 rounded-pill" placeholder="Your email address" />
            <Button className="btn rounded-pill gradient-bg-blue text-white ms-1">Subscribe</Button>
          </div>
        </Col>
				<Col xs={12} md={3} className="text-center mb-5">
          <h5 className="mb-3">Information</h5>
          <ul className="list-unstyled">						
					<li>
              <a href="/about" className="fw-light link-light link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">About us</a>
            </li>
            <li className="my-3">
              <a href="/contact" className="fw-light link-light link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover">Contact us</a>
            </li>
          </ul>
        </Col>
				<Col xs={12} md={3} className="text-center mb-5">
          <h5 className="mb-3">Follow Us</h5>
          <div>
            <IconButton color="inherit" href="https://github.com/AoifeEdX/code-quest" aria-label="GitHub" className="text-white me-2">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" aria-label="Instagram" className="text-white me-2">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white">
              <LinkedIn />
            </IconButton>
          </div>
        </Col>
				<Col xs={12} md={2} className="mb-4 text-center">
			<p role="img" aria-label="logo" className="fs-2">⚔️</p>
			<p className="fw-light">© CodeQuest {new Date().getFullYear()}</p>					
        </Col>
      </Row>      
    </Container>
  );
}

export default Footer;
