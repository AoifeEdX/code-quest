import { useState } from 'react';
import Challenge from "../../components/Challenge/Challenge";
import questions from './../../assets/questions.json';
import Lives from '../../components/Lives/Lives';
import Welcome from '../../components/Welcome/index';
import './Game.css'





export default function Game() {
  const [lives, setLives] = useState(5);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);

  const startGame = () => {
    setIsGameRunning((prev) => !prev);
    setLives(5);
    setCount(0);
    setPoints(0);
  }

  const stopGame = () => {
    setIsGameRunning((prev) => !prev);
  }
  
  const handleAnswerButton = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const answer = event.currentTarget.answer.value;
    const correct_answer = questions[count].correctAnswer;
    
    if (answer === correct_answer) {
      setPoints(prevPoints => prevPoints + 50);
      alert("Correct! You earned 50 points!");
    } else {
      alert(`Wrong answer!`);
      if (lives > 1) {
        setLives(prevLives => prevLives - 1);
      } else {
        setLives(prevLives => prevLives - 1);
        alert('You have no lives left. Game Over');
        stopGame();
      }
      event.currentTarget = '';
    }

    if (count === questions.length - 1) {
      alert(`Congratulations!!! You reach the destination. Your score is ${points}`);
      stopGame();
    } else {
      handleNetxQuestionButton();
    }
  form.reset();
  }
  
  const handleNetxQuestionButton = () => {
    if (count < questions.length - 1) {
      setCount(prevCount => prevCount + 1);
    }
  }

  return (
    <>
      {/* {!isGameRunning && <Welcome startGame={startGame} />} */}

      {isGameRunning && (<section className='page-section' id='game'>
        <div className="container challengeHeader">
          <div>
            <Lives lives={lives} />
          </div>
          <div>THech Skills {points}</div>
        </div>
        <Challenge count={count} handleAnswerButton={handleAnswerButton} handleNetxQuestionButton={handleNetxQuestionButton} />
      </section>)
      }
    </>
      );
    }