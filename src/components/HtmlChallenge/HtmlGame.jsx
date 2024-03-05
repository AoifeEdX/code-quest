import React, { useState, useEffect } from 'react';
import { useUser } from "./../../context/userContext.jsx";
import { useNavigate } from 'react-router-dom';
import htmlQuestionList from "../../../htmlQuestionsList.json";
import { Button, Container } from 'react-bootstrap';
import HtmlLives from './HtlmLives';
import HtmlAnswerCharacter from './HtmlAnswerCharacter';
import './HtmlGame.css';

const HtmlGame = () => {


   const { finalPoints } = useUser();  
    console.log(finalPoints);


    const [show, setShow] = useState(false);
    // let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [allQuestionAnswered, setAllQuestionAnswered] = useState(false);
    const [gameOver, setGameOver]=useState(false);
    const [alertMessage, setAlertMessage] = useState('Start!')
    // const [buy, setBuy] = useState(null)

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
        setSelectedAnswerIndex(null);
       
        // setResult((prev) => selectedAnswer ? 
        //     {...prev, score: prev.score + 50, } : {...prev, lives: prev.lives - 1,});
        
        if (currentQuestion !== htmlQuestionList.length - 1 && result.lives > 0) {
            setCurrentQuestion((prev) => prev + 1)

        } else {
            
            console.log('quest ended')
            setAlertMessage('Hurray!')
            setAllQuestionAnswered(true)
            handleShow()
            // setShowNextButton(true);


        }
    }

    const onAnswerSelected = (answer, index) => {
        // console.log('answer ' + answer)
        // console.log('correct ' +correctAnswer)
        // console.log('index' + index)

        if (gameOver) return;
        setSelectedAnswerIndex(index)

        if (answer === correctAnswer) {

            setSelectedAnswer(true);
            setAlertMessage("Correct!")
            // alert('correct')
            setResult((prev) => ({...prev, score: prev.score + 50}))
            console.log('score ' + result.score)
        } else if (result.lives > 0) {
            setSelectedAnswer(false);
            setAlertMessage("Wrong!");
            // alert('wrong');
            setResult((prev) => ({...prev, lives: prev.lives - 1}));
            } else {
                setAlertMessage("Game Over!")
                console.log(alertMessage)
                // alert('no more lives')
                setGameOver(true)
                handleShow()
            }
         
        onClickNext();
    }
    return (
        <>
        <div className="game-wrapper vw-80 d-flex justify-content-center align-items-center flex-column" >




        <h2 className="welcome-text bangers-text h1 text-uppercase">Welcome to HTML Forge 💥</h2>
        <Container className="col-xxl-10 m-5 px-4 py-5 d-flex justify-content-center align-items-center">
            <div className='d-flex justify-content-center flex-lg-row flex-md-column '>
                <div className="m-2">
                    <div className="d-block mx-lg-auto img-fluid">
                        <img className="quest-img object-fit-contain d-block justify-content-center col-6 col-sm-10" src="/assets/HtmlGame/htmlstart.jpeg" alt="coding man"></img>
                    </div>

                    <div className="d-flex justify-content-center align-items-center  mt-5">
                        <div className='answer-character mt-5'> 

                            <HtmlAnswerCharacter 
                            lives={result.lives}
                            points={result.points}
                            alertMassage={alertMessage}
                            gameOver={gameOver}
                            allQuestionsAnswered={allQuestionAnswered}/>
                        </div>
                        <div className="ms-5 mt-5 h2 bangers-text">
                            {alertMessage}
                        </div>
                    </div>
                </div>
                <div className="m-1">
                    <div className="result-panel col border border-5 rounded" style={{width: '30em', height: '20em'}} >
                        <h3 className="h2"><mark className="fw-bold bangers-text">Your scores:</mark></h3>
                        <div className="results" style={{maxWidth: "15em"}}>
                            <HtmlLives displayedLives={result.lives}/>
                            <div className="d-flex justify-content-between text-danger fs-4 fw-bold bangers-text" ><p> Scores:  </p> <p className="text-end"> {result.score}</p></div>
                        </div>
                    </div>

                    <h2 className="h3 mt-5 text-warning bangers-text tracking-wide">💥 {currentQuestion+1}.  {question} </h2>
                    <div className="m-2 d-flex flex-column mt-5">
                        {options.map((answer, index) => (
                            <Button style={{height: '4em'}} onClick={() => onAnswerSelected(answer, index)} key={answer} id={selectedAnswerIndex === index ? 'selected-answer' : null } className="m-3 answer-button border border-5"><p className="fw-bold pt-1 h4 button-text">{answer}</p></Button>
                        ))}
                    </div>


               
                </div>

            </div>

        
            </Container>      
                <div>
                    {/* <button className="m-2 bg-warning"onClick={onClickNext} disabled={selectedAnswerIndex === null || currentQuestion === 3}>{currentQuestion === 3 ? 'Finish' : 'Next'}</button> */}
                    { show ? <button show={Boolean(show)} className="shaking-button bangers-text m-2 bg-warning"onClick={navigateToLevel3}>GO TO NEXT LEVEL</button> : null}
                </div>

        </div>
        </>
    )



}
export default HtmlGame;