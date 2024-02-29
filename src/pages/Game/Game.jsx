import { useState } from 'react';
import Challenge from "../../components/Challenge/Challenge";
import questions from './../../assets/questions.json';
import Lives from '../../components/Lives/Lives';




export default function Game() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(true);

  const runGame = () => {
    setIsGameRunning((prev) => !prev);
  }

  const stopGame = () => {
    setIsGameRunning((prev) => !prev);
  }
  
  const handleAnswerButton = (event) => {
    console.log(event.target.name);
    console.log(questions[count].correct_answer);
    const answer = event.target.name;
    const correct_answer = questions[count].correct_answer;
    
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
      }
    }

    if (count === questions.length - 1) {
        alert(`Congratulations!!! You reach the destination. Your score is ${points}`);
        stopGame();
      } else {
        handleNetxQuestionButton();
      }
    }

    const handleNetxQuestionButton = () => {
      if (count < questions.length - 1) {
        setCount(prevCount => prevCount + 1);
      }
    }

      return (
        <section className='page-section' id='game'>
          <div className="container">
            <div>
              <Lives lives={lives} />
            </div>
            <div>THech Skills {points}</div>
          </div>
          <Challenge count={count} handleAnswerButton={handleAnswerButton} handleNetxQuestionButton={handleNetxQuestionButton} />
        </section>
      );
    }
  
