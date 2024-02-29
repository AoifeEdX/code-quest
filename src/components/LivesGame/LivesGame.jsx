import React, { useState } from 'react';
import Challenge from './Challenge';
import Lives from './Lives';
import Points from './Points';
import questions from './questions.json';

const Game = () => {
  const [state, setState] = useState({
    currentQuestionIndex: 0,
		lives: 5,
    points: 0,
    prompt: null
  });

  const handleAnswerSubmit = (answer) => {
		const currentQuestion = questions[state.currentQuestionIndex];
		const isCorrect = answer === currentQuestion.correctAnswer;
		let pointsToAdd = 0;
	
		if (isCorrect) {
			pointsToAdd = 20;
		} else {
			pointsToAdd = -10;
			setState(prevState => ({
				...prevState,
				lives: prevState.lives - 1
			}));
		}
	
		setState(prevState => ({
			...prevState,
			points: prevState.points + pointsToAdd,
			prompt: isCorrect ? 'Correct! +10 points' : 'Incorrect! -10 points',
			currentQuestionIndex: prevState.currentQuestionIndex + 1
		}));
	};

  const currentQuestionData = questions[state.currentQuestionIndex];

  return (
    <div>
      <div>
        {state.currentQuestionIndex < questions.length ? (
          <Challenge
            onSubmit={handleAnswerSubmit}
            currentQuestion={currentQuestionData}
          />
        ) : (
          <div>
            <h2>Congratulations!</h2>
            <p>You have completed the game.</p>
            <p>Your final score: {state.points}</p>
          </div>
        )}
      </div>			
			{state.prompt && <p className="text-warning fw-bold fs-3">{state.prompt}</p>}
      <Points points={state.points} />			
			<Lives lives={state.lives} />
    </div>
  );
};

export default Game;
