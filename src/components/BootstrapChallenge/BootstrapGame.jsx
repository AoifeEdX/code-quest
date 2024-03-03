import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import questions from './bootstrapChallenge.json';
import Challenge from "./BootstrapChallenge";
import Lives from "./Lives";
import Points from "./Points";
import ProgressModule from './ProgressModule';
import LevelComplete from './LevelComplete';
import GameOver from './GameOver';

export default function Game() {
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState('Ready');
	const [gameOver, setGameOver] = useState(false);
	const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

	const handleAnswerButton = (event) => {
		if (gameOver) return;

		const answer = event.target.name;
		const correctAnswer = questions[count].correct_answer;

		if (answer === correctAnswer) {
			setPoints(prevPoints => prevPoints + 10);
			setMessage("Correct! + 10 points");
		} else {
			if (lives > 1) {
				setLives(prevLives => prevLives - 1);
				setMessage("Incorrect! - 1 ❤️");
			} else {
				setLives(0);
				setGameOver(true);
				setMessage("No lives left!");
				return;
			}
		}

		if (!gameOver) setCount(prevCount => prevCount + 1);
		checkAllQuestionsAnswered();
	};

	const handleRestartGame = () => {
		setLives(3);
		setPoints(0);
		setCount(0);
		setMessage('Ready');
		setGameOver(false);
		setAllQuestionsAnswered(false);
	};

	const checkAllQuestionsAnswered = () => {
		if (count === questions.length - 1) {
			setAllQuestionsAnswered(true);
		}
	};

	const currentQuestion = questions[count] || {};
	const imageSrc = currentQuestion.image || '';

	return (
		<Container className="vh-100">
			<Row className="justify-content-md-center">
				<Col md="4" className="order-md-2 d-flex flex-column justify-content-between mb-3">
					<div className="border border-2 rounded p-4 mb-3">
						<Lives lives={lives} />
						<Points
							points={points}
							totalQuestions={questions.length}
							pointsPerQuestion={10}
						/>
					</div>
					<div className="border border-2 rounded p-4 text-center">
						<ProgressModule
							lives={lives}
							points={points}
							message={message}
							gameOver={gameOver}
							allQuestionsAnswered={allQuestionsAnswered}
							handleRestartGame={handleRestartGame}
						/>

					</div>
				</Col>
				<Col md="8" className="order-md-1 d-flex flex-column mb-3">
					<div className="border border-2 rounded p-4 flex-grow-1 text-center">
						{imageSrc && !gameOver && (
							<Image src={imageSrc} alt="Question Image" fluid />
						)}
						{!gameOver && !allQuestionsAnswered && (
							<Challenge
								count={count}
								handleAnswerButton={handleAnswerButton}
								gameOver={gameOver}
							/>
						)}
						{allQuestionsAnswered && <LevelComplete />}
						{gameOver && <GameOver handleRestartGame={handleRestartGame} />}
					</div>
				</Col>
			</Row>
		</Container>
	);
}
