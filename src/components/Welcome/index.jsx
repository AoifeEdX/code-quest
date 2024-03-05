import { useState } from 'react';
import { Container, Row, Col, Image, Form, Button, InputGroup, Nav } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { saveCurrentUser } from '../../utils/localStorage';
import fightGif from '/images/fightGif.gif';
import arrow from '/images/arrow.png';

const Welcome = () => {
	const [formData, setFormData] = useState({ username: '' });
	const [error, setError] = useState('');
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    saveCurrentUser(formData.username, 0);
		if (!formData.username.trim()) {
			setError('Please enter your username!');
			setShow(false);
		} else {
			setShow(true);
			setError('');
		}
	};

	const navigateToLevel1Welcome = () => {
		navigate('/level1welcome');
	}

	return (
		<Container>
			<Row className="justify-content-center align-items-center">
				<Col md="6" className="order-md-2">
					<Image className="ps-md-5" src={fightGif} alt="CodeQuest background" fluid rounded />
				</Col>
				<Col md="6" className="order-md-1 my-5 ">
					<h1 className="mt-4" style={{ height: '200px', overflow: 'hidden' }}>
						Welcome to <span className="text-warning">{' '}
							<Typewriter
								options={{
									strings: ['CodeQuest, <br> Front-end Chronicles!'],
									autoStart: true,
									loop: true,
									delay: 100,
									deleteSpeed: 30,
								}}
							/></span>
					</h1>
					<p className="fs-4">
						Your coding skills will be put to the test as you venture forth into the digital realm of CodeQuest.
					</p>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col md="5" className="px-5">
					<Image className="pe-md-5 d-none d-sm-block" src={arrow} alt="arrow" fluid rounded />
				</Col>
				<Col md="6" className="py-md-5 mt-md-5">
					<h2 className="mt-5">Enter your name to begin:</h2>
					<Form onSubmit={handleSubmit}>
						<InputGroup className="my-5">
							<Form.Control
								type="text"
								name="username"
								className="rounded-pill me-3 w-75"
								placeholder="Player Name"
								value={formData.username}
								onChange={handleInputChange}
							/>
							<Button type="submit" className="rounded-pill gradient-bg-blue">
								Submit
							</Button>
						</InputGroup>
						{error && <Form.Text className="text-danger">{error}</Form.Text>}
						{show && (
							<div>
								<p className="fs-4">
									Hello, <span className="text-danger bold-text">{formData.username}</span>!
								</p>
								<p className="fs-5">
									You are embarking on a journey to become a skilled <span className="bold-text text-warning">front-end developer</span>, and face the challenges plaguing the digital kingdom.
								</p>
							</div>
						)}
					</Form>
					{show && (
						<div className="d-flex flex-column">
							<Button className="my-4 gradient-bg-orange rounded-pill btn-lg" href="/level1welcome" onClick={navigateToLevel1Welcome}>
								Start the Game
							</Button>
						</div>
					)}
				</Col>
			</Row>

			<Nav>
<Nav.Link className="nav-element" href="/level1welcome">Level1</Nav.Link>
</Nav>
<Nav>
<Nav.Link className="nav-element" href="/level2welcome">Level2</Nav.Link>
</Nav>
<Nav>
<Nav.Link className="nav-element" href="/level3welcome">Level3</Nav.Link>
</Nav>
<Nav>
<Nav.Link className="nav-element" href="/final-scores">Final Scores</Nav.Link>
</Nav>
		</Container>


	);
};

export default Welcome;
