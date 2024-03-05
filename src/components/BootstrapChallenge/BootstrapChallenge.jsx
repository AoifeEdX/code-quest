import React from 'react';
import { Button } from 'react-bootstrap';
import questions from './bootstrapChallenge.json';

export default function Challenge({ count, handleAnswerButton, gameOver, questionAnswered }) {
    const questionData = questions[count] || {};
    const question = questionData.question || '';
    const answerOptions = questionData.options || [];

    const handleAnswer = (event) => {
        if (!gameOver && !questionAnswered) {
            handleAnswerButton(event);
        }
    };

    return (
        <div id='challenge'>
            {/* <h2 className="mt-4">Bootstrap Battle</h2> */}
            <h3 className="my-4">Question {count + 1}:</h3>
            <p className='question fs-5'>{question}</p>
            <div className='options text-center'>
                {answerOptions.map((option) => (
                    <Button
                        key={option}
                        name={option}
                        onClick={handleAnswer}
												className="m-2 gradient-bg-blue p-2 rounded-pill"
                        className="m-2"
                        disabled={gameOver || questionAnswered}
                    >
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
}