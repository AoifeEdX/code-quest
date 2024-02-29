import React, { useState } from 'react';
import Challenge from './ChallengeTest';
import PointsBar from './PointsBar';
import questList from './questionsAnswers.json';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setpoints] = useState(100);

  const handleAnswerSubmit = (answer) => {
    if (!answer) {
      alert("Please enter your answer."); 
      return;
    }
    
    const currentQuestion = questList[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      alert("Correct!");
    } else {
      alert("Incorrect! -10 points");
      setpoints(points - 10);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestionData = questList.filter((quest) => quest.id === currentQuestionIndex + 1)[0];

  return (
    <div>
      <PointsBar points={points} />
      {currentQuestionIndex < questList.length ? (
        <div>
          <Challenge
            onSubmit={handleAnswerSubmit}
            currentQuestion={currentQuestionData}
          />
        </div>
      ) : (
        <div>
          <h2>Congratulations!</h2>
          <p>You have completed the game.</p>
          <p>Your final score: {points}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
