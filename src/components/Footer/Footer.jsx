import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '/images/logo.png';

function Footer() {
	const [feedback, setFeedback] = useState(false);
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const scriptURL = 'https://script.google.com/macros/s/AKfycbwjBpRhdUIk8hhbE6PK9idYs9c6vU8KEF-awsYR-7yFCcOzim4MSA9cuB9WJBjPKHTJ/exec';

	const handleChange = (e) => {
		const value = e.target.value;
		setEmail(value);
		setValidEmail(validateEmail(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validEmail) {
			fetch(scriptURL, { method: 'POST', contentType: 'application/json', body: JSON.stringify({ Email: email }) })
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setFeedback(true);
					setTimeout(() => setFeedback(false), 10000);
					setEmail("");
				})
				.catch(error => {
					setErrorMessage("Failed to submit. Please try again later.");
					console.error('Error!', error.message);
				});
		} else {
			setErrorMessage("Please enter a valid email address.");
		}
	};

	const validateEmail = (email) => {
		// Added this regex for basic email validation
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	return (
		<Container className="py-5">
			<hr className="my-5"></hr>
			<Row>
				<Col xs={12} md={4} className="mb-5 text-md-start text-center">
					<h5 className="mb-3">Newsletter</h5>
					<p className="fw-light">Get weekly updates on our game releases</p>
					<form onSubmit={handleSubmit}>
						<div className="d-flex">
							<input
								type="email"
								className={`form-control me-2 rounded-pill ${validEmail ? '' : 'is-invalid'}`}
								value={email}
								onChange={handleChange}
								placeholder="Your email address"
								required
							/>
							<Button type="submit" className="btn rounded-pill gradient-bg-blue text-white ms-1">Subscribe</Button>
						</div>
						{!validEmail && <div className="invalid-feedback">{errorMessage}</div>}
					</form>
          <span > {feedback? "Thank you for subscribing":""}</span>
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
						<IconButton color="inherit" href="https://github.com/AoifeEdX/code-quest" target="_blank" aria-label="GitHub" className="text-white me-2">
							<GitHub />
						</IconButton>
						<IconButton color="inherit" href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-white me-2">
							<Instagram />
						</IconButton>
						<IconButton color="inherit" href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" className="text-white">
							<LinkedIn />
						</IconButton>
					</div>
				</Col>
				<Col xs={12} md={2} className="mb-4 text-center">
					<img src={logo} alt="Logo" className="footer-logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
					<p className="fw-light">© {new Date().getFullYear()}</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;