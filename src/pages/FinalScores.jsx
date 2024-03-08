import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import Points from '../components/BootstrapChallenge/Points';
import Leaderboard from '../components/Leaderboard';
import cheerGif from '/images/cheerGif.gif';

const FinalScores = () => {
	const [finalScores, setFinalScores] = useState(null);
	const [showLeaderboard, setShowLeaderboard] = useState(false);
	const handleButtonClick = () => {
		setShowLeaderboard(false)
	}

	useEffect(() => {
		const storedUserData = localStorage.getItem('currentUser');
		const parsedData = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
		setFinalScores(parsedData);
	}, []);

	if (!finalScores) {
		return <div>No scores recorded – have you completed all levels?</div>;
	}

	const { points } = finalScores;

	return (
		<Container>
			<Row>
				<Col md="6">
					<Image className="pe-md-5 my-5" src={cheerGif} alt="CodeQuest background" fluid rounded />
				</Col>
				<Col md="6" className="my-5 py-5">
					<h1>Final Scores</h1>
					<p className="fs-3 my-5">You made it to the end of the <strong>CodeQuest Chronicles</strong>!</p>
					<div className="me-md-5" >
						<Points points={points} />
					</div>
					<Button
						className="rounded-pill my-5 gradient-bg-orange text-white btn-lg"
						style={{ width: 'auto' }}
						variant="warning"
						onClick={() => setShowLeaderboard(!showLeaderboard)}
					>
						{showLeaderboard ? 'Hide Leaderboard' : 'View Leaderboard'}
					</Button>
					{showLeaderboard && <Leaderboard onClose={handleButtonClick} />}
				</Col>
			</Row>
		</Container>
	);
};

export default FinalScores;
