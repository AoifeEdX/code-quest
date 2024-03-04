import React, { useState, useEffect } from 'react';
import { useUser } from "./../../context/userContext.jsx";
import { useNavigate } from 'react-router-dom';
import htmlQuestionList from "../../../htmlQuestionsList.json";
import Button from 'react-bootstrap/Button';

// todo if scores or lives 0 modal that you lost
// // todo only one selected answer excepted???
// todo add styling to selected answer
// todo add link to next level button
// // todo fix disable button 
const HtmlGame = () => {
   const { finalPoints } = useUser();  
console.log(finalPoints);

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
    const navigate = useNavigate();
    const navigateToLevel3 = () => {
        navigate('/level3welcome')
    }

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
                <h2>Welcome in HTML Forge</h2>

                <div className="quest-img-container">
                <img className="quest-img m-5 d-block justify-content-center col-10 col-sm-8 p-5" src="/images/level 2.png" style={{maxWidth: '700', height: '500', margin: 'auto'}} alt="coding man"></img>
                     </div>
            </div>
            <div>
                <h2>{currentQuestion+1}.  {question} </h2>
                <div className="m-2 d-flex flex-column col-10 col-sm-8 col-lg-6">
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
                { show ? <button show={Boolean(show)} className="m-2 bg-warning"onClick={navigateToLevel3}>Got to next level</button> : null}
            </div>
            </div>      
        </>
    )



}
export default HtmlGame;