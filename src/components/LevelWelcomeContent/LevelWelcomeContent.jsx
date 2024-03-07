import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LevelWelcomeContent = (props) => {
	return (
		<>
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col md="6" className="order-md-2 py-3">
						<Image src={props.image} alt={props.name} fluid className="d-block mx-lg-auto img-fluid p-5" />
					</Col>
					<Col md="6" className="order-md-1">
						<h2 className="fw-bold mb-3">{props.name}</h2>
						<p className="mt-5">{props.description}</p>
						<p>{props.instruction}</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LevelWelcomeContent;
