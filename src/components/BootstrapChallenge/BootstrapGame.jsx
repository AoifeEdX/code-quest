import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import questions from './bootstrapChallenge.json';
import Challenge from "./BootstrapChallenge";
import Lives from "./Lives";
import Points from "./Points";
import ProgressModule from './ProgressModule';
import { useNavigate } from 'react-router-dom';

export default function Game() {
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState('Answer the questions to progress.');
	const [gameOver, setGameOver] = useState(false);
	const [questionAnswered, setQuestionAnswered] = useState(false);
	const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
	const navigate = useNavigate();

	const handleAnswerButton = (event) => {
		if (questionAnswered || gameOver) return;
		setQuestionAnswered(true);

		const answer = event.target.name;
		const correctAnswer = questions[count].correct_answer;

		if (answer === correctAnswer) {
			setPoints(prevPoints => prevPoints + 20);
			setMessage("Correct! + 20 points");
		} else {
			if (lives > 1) {
				setLives(prevLives => prevLives - 1);
				setMessage("Wrong answer!  –1❤️");
			} else {
				setLives(0);
				setGameOver(true);
				setMessage("No lives left!");
			}
		}
	}

	const handleNextQuestion = () => {
		if (!gameOver) {
			setCount(prevCount => prevCount + 1);
			setMessage('Answer the questions to progress.');
			setQuestionAnswered(false);
			checkAllQuestionsAnswered();
		}
	}

	const handleRestartGame = () => {
		setLives(3);
		setPoints(0);
		setCount(0);
		setMessage('Answer the questions to progress.');
		setGameOver(false);
		setQuestionAnswered(false);
	}

	const checkAllQuestionsAnswered = () => {
		if (count === questions.length - 1) {
			setAllQuestionsAnswered(true);
		}
	};

	const navigateToFinalScores = () => {
		navigate('/final-scores');
	};

	const currentQuestion = questions[count] || {};
	const imageSrc = currentQuestion.image || '';

	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col md="4" className="order-md-2 d-flex flex-column justify-content-between mb-3">
					<div className="border border-0 rounded p-4 mb-3">
						<Lives lives={lives} />
						<Points points={points} />
					</div>
					<div className="border border-0 rounded p-4 text-center">
						<ProgressModule
							lives={lives}
							points={points}
							message={message}
							answerCorrect={message.startsWith("Correct")}
							handleNextQuestion={handleNextQuestion}
							gameOver={gameOver}
							handleRestartGame={handleRestartGame}
							questionAnswered={questionAnswered}
							setQuestionAnswered={setQuestionAnswered} 
						/>
					</div>
				</Col>
				<Col md="8" className="order-md-1 d-flex flex-column mb-3">
					<div className="border border-0 rounded p-4 flex-grow-1">
						{imageSrc && <Image src={imageSrc} alt="Question Image" fluid />}
						{!allQuestionsAnswered ? (
							<Challenge
								count={count}
								handleAnswerButton={handleAnswerButton}
								handleNextQuestion={handleNextQuestion}
								gameOver={gameOver}
								questionAnswered={questionAnswered}
								setQuestionAnswered={setQuestionAnswered}
							/>
						) : (
							<div className="d-flex flex-column justify-content-center align-items-center h-100">
								<h2 className="my-3">Level Complete!</h2>
								<p className="mb-5 fs-5">Well done, you completed the Bootstrap Battle.</p>
								<Button variant="outline-warning" size="lg" onClick={navigateToFinalScores}>
									Final Scores
								</Button>
							</div>
						)}
					</div>
				</Col>
			</Row>
		</Container>
	);
}
