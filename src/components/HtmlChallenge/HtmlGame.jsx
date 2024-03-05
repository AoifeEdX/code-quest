import React, { useState, useEffect } from 'react';
import { useUser } from "./../../context/userContext.jsx";
import { useNavigate } from 'react-router-dom';
import htmlQuestionList from "../../../htmlQuestionsList.json";
import { Button, Container } from 'react-bootstrap';
import HtmlLives from './HtlmLives';
import HtmlAnswerCharacter from './HtmlAnswerCharacter';

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
    const [alertMessage, setAlertMessage] = useState('start!')
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
            setAlertMessage("Correct")
            alert('correct')
            setResult((prev) => ({...prev, score: prev.score + 50}))
            console.log('score ' + result.score)
        } else if (result.lives > 0) {
            setSelectedAnswer(false);
            setAlertMessage("Incorrect");
            alert('wrong');
            setResult((prev) => ({...prev, lives: prev.lives - 1}));
            } else {
                setAlertMessage("Game Over")
                console.log(alertMessage)
                // alert('no more lives')
                setGameOver(true)
                handleShow()
            }
         
        onClickNext();
    }



    return (
        <>
        

        <h2 className="h2 ms-5">Welcome in HTML Forge</h2>
        <Container className="m-5 col-xxl-8 px-4 py-5 d-flex justify-content-center align-items-center">
            <div className='border border-warning'>
                <div className="m-2 border border-info">
                    <div className="d-block mx-lg-auto img-fluid">
                        <img className="quest-img m-5 d-block justify-content-center col-10 col-sm-8 p-5" src="/assets/HtmlGame/htmlstart.jpeg" style={{maxWidth: '700', height: '500', margin: 'auto'}} alt="coding man"></img>
                    </div>

                </div>


                <div className="border border-success">
                    <div className="result-panel col border border-2 border-success" >
                        <h3>Your scores</h3>
                        <div className="" style={{maxWidth: "15em"}}>
                            <HtmlLives displayedLives={result.lives}/>
                            <div>Scores: {result.score}</div>
                        </div>
                    </div>

                    <h2>{currentQuestion+1}.  {question} </h2>
                    <div className="m-2 d-flex flex-column col-10 col-sm-8 col-lg-6">
                        {options.map((answer, index) => (
                            <Button variant="primary" onClick={() => onAnswerSelected(answer, index)} key={answer} id={selectedAnswerIndex === index ? 'selected-answer' : null } className="m-3">{answer}</Button>
                        ))}
                    </div>


                <div>
                    <HtmlAnswerCharacter 
                    lives={result.lives}
                    points={result.points}
                    alertMassage={alertMessage}
                    gameOver={gameOver}
                    allQuestionsAnswered={allQuestionAnswered}/>
                </div>
                </div>


            </div>

            
             


        
        


            <div>
          

    
                {/* <button className="m-2 bg-warning"onClick={onClickNext} disabled={selectedAnswerIndex === null || currentQuestion === 3}>{currentQuestion === 3 ? 'Finish' : 'Next'}</button> */}
                { show ? <button show={Boolean(show)} className="m-2 bg-warning"onClick={navigateToLevel3}>Got to next level</button> : null}
            </div>
        
            </Container>      
        </>
    )



}
export default HtmlGame;