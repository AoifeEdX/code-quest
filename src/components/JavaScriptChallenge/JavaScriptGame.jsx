import { useState } from 'react';
import Challenge from "./JavaScriptChallenge";
import questions from '../../databases/javascriptQuestions.json';
import Lives from './Lives';
import './JavaScriptGame.css';
import {
	successfulNotification,
	failNotification,
	correctAnswerNotification,
	wrongtAnswerNotification,
	rememberNotification
} from './Notification/Notification';
import { savePointsToStorage } from '../../utils/localStorage';

export default function JavaScriptGame() {
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);
	const [count, setCount] = useState(0);
	const [isFormDisabled, setFormDisabled] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const handleRadioChange = (event) => {
		setSelectedOption(event.target.value);
	}

	const pauseGame = () => {
		setFormDisabled(true);
		setTimeout(() => setFormDisabled(false), 2000);
	};

	const handleAnswerButton = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const answer = event.currentTarget.answer.value;
		const correct_answer = questions[count].correctAnswer;

		if (answer) {
			if (answer === correct_answer) {
				setPoints(prevPoints => prevPoints + 10);
				correctAnswerNotification();
				pauseGame();
			} else {
				wrongtAnswerNotification();
				pauseGame();
				if (lives > 1) {
					setLives(prevLives => prevLives - 1);
				} else {
					setLives(prevLives => prevLives - 1);
					setTimeout(() => {
						failNotification();
						setFormDisabled(true)
					}, 2000)
				}
				event.currentTarget = '';
			}

			if ((count === questions.length - 1) && (lives > 0)) {
				const currentPoints = (answer === correct_answer) ? points + 10 : points;
				setTimeout(() => {
					successfulNotification(currentPoints);
					setFormDisabled(true)
				}, 2000)
				savePointsToStorage(currentPoints);
			}

			handleNetxQuestionButton();
		} else {
			rememberNotification();
			pauseGame();
		}
		form.reset();
	}

	const handleNetxQuestionButton = () => {
		if ((count < questions.length - 1) && (lives > 0)) {
			setCount(prevCount => prevCount + 1);
		}
	}


	return (
		<>
			<section className='page-section' id='game'>
				<div className="container challengeHeader">
					<div>
						<Lives lives={lives} />
					</div>
					<div className='points'>Points: {points}</div>
				</div>
				<Challenge count={count} handleAnswerButton={handleAnswerButton} isFormDisabled={isFormDisabled} />
			</section>
		</>
	);
}
