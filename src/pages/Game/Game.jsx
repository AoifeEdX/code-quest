import { useState } from 'react';
import Challenge from "../../components/Challenge/Challenge";
import questions from './../../assets/questions.json';



export default function Game() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  
  const handleAnswerButton = (event) => {
    console.log(event.target.name);
    console.log(questions[count].correct_answer);
    const answer = event.target.name;
    const correct_answer = questions[count].correct_answer;
    
    if (answer === correct_answer) {
      setPoints(prevPoints => prevPoints + 50);
      alert("Correct! You earned 50 points!");
    }
    else {
      alert(`Wrong answer!`);
      if (lives > 0) {
        setLives(prevLives => prevLives - 1);
      }
    }
    handleNetxQuestionButton();
  }

  const handleNetxQuestionButton = () => {
      setCount(prevCount => prevCount + 1);
    }

    return (
      <section className='page-section' id='game'>
        <div className="container">
          <div>{lives}</div>
          <div>{points}</div>
        </div>
        <Challenge count={count} handleAnswerButton= {handleAnswerButton} handleNetxQuestionButton={handleNetxQuestionButton}/>
      </section>
    );
  }