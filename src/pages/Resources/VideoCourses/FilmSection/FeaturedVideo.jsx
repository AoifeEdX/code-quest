import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedVideo = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center my-5">        
        <Col md={6} className="p-4">
          <div>
            <h1 className="mb-4">Featured Video:</h1>
						<h2 className="text-warning my-3">The Complete Web Developer Course, Zero to Mastery</h2>
            <p className="text-lg">Watch this course from Udemy to become a pro programmer.</p>
          </div>
        </Col>
				<Col md={6} className="p-4">
          <iframe
            width="100%"
            height="350"
            src="https://archive.org/embed/free-all-course.-com-udemy-the-complete-web-developer-in-2020-zero-to-mastery"
            title="Featured Video"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedVideo;
