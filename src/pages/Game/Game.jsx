import { useState, useEffect } from 'react';
import Challenge from "../../components/Challenge/Challenge";
import questions from './../../assets/questions.json';
import Lives from '../../components/Lives/Lives';
import './Game.css';
import { successfulNotification, failNotification, correctAnswerNotifivation, wrongtAnswerNotifivation, rememberNotifivation } from '../../components/Notification/Notification';
import { savePointsToStorage } from '../../utils/localStorage';

export default function Game() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [count, setCount] = useState(0);
  const [isFormDisabled, setFormDisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
	if ((count === questions.length - 1) && (lives === 0)) {
    failNotification();
    setFormDisabled(true);
    }
    
  if ((count === questions.length - 1) && (lives > 0)) {
        successfulNotification(points, 2);
        savePointsToStorage(points);
        setFormDisabled(true);
      }
	}, [count, points, lives]);
  
  const handleRadioChange = (event) => {
    setFormDisabled(false);
    setSelectedOption(event.target.value);
  }

  const handleAnswerButton = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const answer = event.currentTarget.answer.value;
    if (!answer) {
      rememberNotifivation();
      setFormDisabled(true);
    } else {
      const correct_answer = questions[count].correctAnswer;
    
      if (answer === correct_answer) {
        setPoints(prevPoints => prevPoints + 10);
        correctAnswerNotifivation();
        setFormDisabled(true);
      } else {
        wrongtAnswerNotifivation();
        setFormDisabled(true);
        if (lives > 0) {
          setLives(prevLives => prevLives - 1);
        }
        event.currentTarget = '';
      }

      if (count < questions.length - 1) setCount(prevCount => prevCount + 1);
  }

  form.reset();
  } 

  return (
    <>
      <section className='page-section' id='game'>
        <div className="container challengeHeader">
          <div>
            <Lives lives={lives} />
          </div>
          <div className='points'>Points: {points}</div>
        </div>
        <Challenge count={count} handleAnswerButton={handleAnswerButton} isFormDisabled={isFormDisabled} handleRadioChange={handleRadioChange} selectedOption={selectedOption} />
      </section>
    </>
      );
    }