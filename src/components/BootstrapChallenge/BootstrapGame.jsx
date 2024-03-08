import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import questions from '../../databases/bootstrapChallenge';
import Challenge from "./BootstrapChallenge";
import Lives from "./Lives";
import Points from "./Points";
import Character from './Character';
import LevelComplete from './LevelComplete';
import GameOver from './GameOver';
import { savePointsToStorage } from '../../utils/localStorage';

export default function Game() {
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState('Ready');
	const [gameOver, setGameOver] = useState(false);
	const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
	const [lastAnsweredQuestionIndex, setLastAnsweredQuestionIndex] = useState(-1);

	useEffect(() => {
		if (allQuestionsAnswered) {
			savePointsToStorage(points);
			//updateLeaderBordStorage();
		}
	}, [allQuestionsAnswered, points]);

	useEffect(() => {
		const storedUserData = localStorage.getItem('currentUser');
		const parsedData = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
		setPoints(parsedData.points);
	}, []);

	const handleAnswerButton = (userAnswer) => {
		if (gameOver) return;

		const correctAnswer = questions[count].correct_answer;

		if (userAnswer.trim() === correctAnswer) {
			setPoints(prevPoints => prevPoints + 10);
			setMessage("Correct! + 10 points");
		} else {
			if (lives > 1) {
				setLives(prevLives => prevLives - 1);
				setMessage("Incorrect! - 1 ❤️");
			} else {
				setLives(0);
				setLastAnsweredQuestionIndex(count);
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
		setLastAnsweredQuestionIndex(-1);
	};

	const handleBuyLife = () => {
		if (points >= 10) {
			setLives(prevLives => prevLives + 1);
			setPoints(prevPoints => prevPoints - 10);
			setMessage("Life bought! - 10 points");
			setCount(lastAnsweredQuestionIndex);
			setGameOver(false);
		}
	};

	const checkAllQuestionsAnswered = () => {
		if (count === questions.length - 1) {
			setAllQuestionsAnswered(true);
		}
	};

	const currentQuestion = questions[count] || {};
	const imageSrc = currentQuestion.image || '';

	return (
		<Container className="mt-5">
			<Row className="justify-content-md-center text-center">
				<Col md="4" className="order-md-2 d-flex flex-column justify-content-between mb-3">
					<div className="border border-2 border-warning rounded p-4 mb-3 bg-primary bg-opacity-25 bg-gradient">
						<Lives lives={lives} />
						<Points
							points={points}
							totalQuestions={questions.length}
							pointsPerQuestion={10}
						/>
					</div>
					<div className="border border-2 border-warning rounded text-center bg-primary bg-opacity-25 bg-gradient d-none d-sm-block">
						<Character
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
					<div className="border border-2 border-warning rounded flex-grow-1 bg-primary bg-opacity-25 bg-gradient">
						{imageSrc && !gameOver && (
							<Image src={imageSrc} alt="Question Image" fluid />
						)}
						{!gameOver && !allQuestionsAnswered && (
							<div className="p-3">
								<Challenge
									count={count}
									handleAnswerButton={handleAnswerButton}
									gameOver={gameOver}
								/>
							</div>
						)}
						{allQuestionsAnswered && <LevelComplete totalQuestions={questions.length} pointsPerQuestion={10} />}
						{gameOver && <GameOver handleRestartGame={handleRestartGame} points={points} handleBuyLife={handleBuyLife} />}

					</div>
				</Col>
			</Row>
		</Container>
	);
}
