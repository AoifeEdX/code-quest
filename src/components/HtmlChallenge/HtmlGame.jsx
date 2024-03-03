import React, { useState } from 'react';
import htmlQuestionList from "../../../htmlQuestionsList.json";
import Button from 'react-bootstrap/Button';

// todo if scores or lives 0 modal that you lost
// // todo only one selected answer excepted???
// todo add styling to selected answer
// todo add link to next level button
// // todo fix disable button 
const HtmlGame = () => {



    const [show, setShow] = useState(false);
    // let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [selectedAnswer, setSelectedAnswer] = useState('');
    let [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    let [result, setResult] = useState( {
        lives: 3,
        score: 0
    });
    const { question, options, correctAnswer } = htmlQuestionList[currentQuestion];
    const handleShow = () => setShow(true)
    // console.log(question);
    // console.log(options);

    const onClickNext = () => {
        console.log(selectedAnswer)
        setSelectedAnswerIndex(null);
        console.log(selectedAnswerIndex)
       
        // setResult((prev) => selectedAnswer ? 
        //     {...prev, score: prev.score + 50, } : {...prev, lives: prev.lives - 1,});
        
        if (currentQuestion !== htmlQuestionList.length - 1 && result.lives > 0) {
            setCurrentQuestion((prev) => prev + 1)

        } else {
            console.log('quest ended')
            handleShow()
            // setShowNextButton(true);


        }
    }

    const onAnswerSelected = (answer, index) => {
        console.log('answer ' + answer)
        console.log('correct ' +correctAnswer)
        console.log('index' + index)
        setSelectedAnswerIndex(index)
        
        if (answer === correctAnswer) {

            setSelectedAnswer(true);
            alert('correct')
            setResult((prev) => ({...prev, score: prev.score + 50}))
            console.log('score ' + result.score)
        } else if (result.lives > 0) {
            setSelectedAnswer(false);
            alert('wrong')
            setResult((prev) => ({...prev, lives: prev.lives - 1}))
            } else {
                alert('no more lives')
                handleShow()
            }
         
        onClickNext();
    }



    return (
        <>
        <div className="m-5">
            <div>
                <h2>Congratulation, and welcome in HTML Forge</h2>
                <div className="quest-img-container">
                <img className="m-5 quest-img" src="/images/level 2.png" alt="coding man"></img>
                     </div>
                <p>You are one step closer to save our Digital World from impending chaos. In this region of CodeLand, HTML tags have been tangled up, causing chaos in the digital landscape. </p>
                <p>Armed with your coding skills, each of your correct answer comes to life and helps to save our World. Embrace the true magic of HTML Forge! Learn and master Html, enhance your abilities.</p>
            </div>
            <div>
                <h2>{currentQuestion+1}.  {question} </h2>
                <div className="m-2">
                    {options.map((answer, index) => (
                        <Button variant="primary" onClick={() => onAnswerSelected(answer, index)} key={answer} id={selectedAnswerIndex === index ? 'selected-answer' : null } className="m-3">{answer}</Button>
                    ))}
                </div>

                <div className="result">
                    <h3>Your scores</h3>
                    <div>Lives: {result.lives}</div>
                    <div>Scores: {result.score}</div>
                </div>
                {/* <button className="m-2 bg-warning"onClick={onClickNext} disabled={selectedAnswerIndex === null || currentQuestion === 3}>{currentQuestion === 3 ? 'Finish' : 'Next'}</button> */}
                { show ? <button show={Boolean(show)} className="m-2 bg-warning"onClick={onClickNext}>Got to next level</button> : null}
            </div>
            </div>      
        </>
    )



}
export default HtmlGame;