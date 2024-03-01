import React, { useState } from 'react';
import htmlQuestionList from "../../../htmlQuestionsList.json";

// todo if scores or lives 0 modal that you lost
// todo only one selected answer excepted???
// todo add styling to selected answer
// todo add link to next level button
// todo fix disable button 
const HtmlGame = () => {

    // let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [selectedAnswer, setSelectedAnswer] = useState('');
    let [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    let [result, setResult] = useState( {
        lives: 3,
        score: 0
    })
    const { question, options, correctAnswer } = htmlQuestionList[currentQuestion];
    console.log(question);
    console.log(options);

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setCurrentQuestion((prev) => prev + 1)
        setResult((prev) => selectedAnswer ? {...prev,
                                                lives: prev.lives,
                                            score: prev.score + 50} : 
                                            {...prev,
                                            lives: prev.lives - 1,
                                            }) 
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    }


    return (
        <>
            <div>
                <h2>Congratulation, and welcome in HTML Forge</h2>
                <img src="/htmlgame-background.jpeg" alt="coding man"></img>
                <p>You are one step closer to save our Digital World from impending chaos. In this region of CodeLand, HTML tags have been tangled up, causing chaos in the digital landscape. </p>
                <p>Armed with your coding skills, each of your correct answer comes to life and helps to save our World. Embrace the true magic of HTML Forge! Learn and master Html, enhance your abilities.</p>
            </div>
            <div>
                <h2>{currentQuestion+1}.  {question} </h2>
                <div>
                    {options.map((answer) => (
                        <button className="m-2" onClick={() => onAnswerSelected(answer)} key={answer}>{answer}</button>
                    ))}
                </div>

                <div>
                    <h3>Your scores</h3>
                    <div>Lives: {result.lives}</div>
                    <div>Scores: {result.score}</div>
                </div>
                <button className="m-2 bg-warning"onClick={onClickNext} disabled={selectedAnswerIndex === null || currentQuestion === 3}>{currentQuestion === 3 ? 'Finish' : 'Next'}</button>
                <button className="m-2 bg-warning"onClick={onClickNext} disabled={selectedAnswerIndex === null || currentQuestion === 3}>Got to next level</button>
            </div>
               
        </>
    )



}
export default HtmlGame;